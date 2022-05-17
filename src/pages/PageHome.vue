<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newNFTweetsContent"
            class="new-NFTweet"
            label="What's happening?"
            counter
            maxlength="250"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img
                  src="https://avatars.githubusercontent.com/u/89755810?v=4"
                />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewNFTweet"
            :disable="!newNFTweetsContent"
            class="q-mb-lg"
            unelevated
            rounded
            color="primary"
            label="NFTweet"
            no-caps
          />
        </div>
      </div>

      <q-separator size="10px" color="grey-2" class="divider" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="NFTweet in NFTweets"
            :key="NFTweet.date"
            class="NFTweet q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://avatars.githubusercontent.com/u/89755810?v=4"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><span class="text-weight-bold"
                  >Orhan Benli<span class="text-grey-6">
                    @orhanbenli &bull; {{ relativeDate(NFTweet.date) }}</span
                  ></span
                >
              </q-item-label>

              <q-item-label class="NFTweet-content text-body1"
                >{{ NFTweet.content }}
              </q-item-label>
              <div class="NFTweet-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fa-regular fa-comment"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fa-solid fa-retweet"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fa-regular fa-heart"
                  size="sm"
                />
                <q-btn
                  @click="deleteNFTweet(NFTweet)"
                  flat
                  round
                  color="grey"
                  icon="fa-solid fa-trash"
                  size="sm"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import firebase from "firebase";
import { useFirestoreCollection } from "@gcto/firebase-hooks";
import { formatDistance } from "date-fns";
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/composition-api";

export default defineComponent({
  name: "PageHome",
  setup() {
    type NFTweet = {
      content: string;
      date: string;
    };
    const newNFTweetsContent = ref("Placeholder_text"); 
    const NFTweets = [];
    const relativeDate = (value) => {
      return formatDistance(value, new Date());
    };
    const addNewNFTweet = () => {
      const newNFTweet = {
        content: newNFTweetsContent,
        date: Date.now(),
      };
      NFTweets.unshift(newNFTweet);
      newNFTweetsContent = "";
    };
    const deleteNFTweet = (NFTweet) => {
      const dateToDelete = NFTweet.date;
      const index = NFTweets.findIndex(
        (NFTweet) => NFTweet.date === dateToDelete
      );
      NFTweets.splice(index, 1);
    };
    const result = useFirestoreCollection<NFTweet>("NFTweets");
    return {
      newNFTweetsContent,
      NFTweets,
      relativeDate,
      addNewNFTweet,
      deleteNFTweet,
    };
  },
});

// export default {
//   name: "PageHome",
//   data() {
//     type NFTweet = {
//       content: string;
//       date: string;
//     };
//     return {
//       newNFTweetsContent: "",
//       NFTweets: [
//         {
//           content:
//             "Innovation distinguishes between a leader and a follower. --Steve Jobs",
//           date: 1651789459438,
//         },
//         {
//           content:
//             "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett",
//           date: 1651763276737,
//         },
//         {
//           content:
//             "An investment in knowledge pays the best interest. --Benjamin Franklin",
//           date: 1651756855140,
//         },
//       ],
//     };
//   },
//   methods: {
//     relativeDate(value) {
//       return formatDistance(value, new Date());
//     },
//     addNewNFTweet() {
//       let newNFTweet = {
//         content: this.newNFTweetsContent,
//         date: Date.now(),
//       };
//       this.NFTweets.unshift(newNFTweet);
//       this.newNFTweetsContent = "";
//     },
//     deleteNFTweet(NFTweet) {
//       let dateToDelete = NFTweet.date;
//       let index = this.NFTweets.findIndex(
//         (NFTweet) => NFTweet.date === dateToDelete
//       );
//       this.NFTweets.splice(index, 1);
//     },
//   },
//   mounted() {
//     result = useFirestoreCollection<NFTweet>("NFTweets");
//   },
// };
</script>

<style lang="sass">
.new-NFTweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.NFTweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.NFTweet-content
  white-space: pre-line
.NFTweet-icons
  margin-left: -5px
</style>
