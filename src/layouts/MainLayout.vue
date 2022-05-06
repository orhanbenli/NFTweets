<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-sm lt-md"
            name="fa-solid fa-money-bill-transfer"
            size="2rem"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="283"
      bordered
    >
      <q-icon
        class="q-ml-md q-mt-sm q-mb-lg"
        name="fa-solid fa-money-bill-transfer"
        size="3rem"
        color="primary"
      />

      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/whatnft" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="payments" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >What is an NFT?</q-item-section
          >
        </q-item>

        <q-item to="/different" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="toll" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Different from Cryptocurrency?</q-item-section
          >
        </q-item>

        <q-item to="/howwork" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="add_card" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >How Does an NFT Work?</q-item-section
          >
        </q-item>

        <q-item to="/howbuy" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="currency_exchange" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >How to Buy NFTs?</q-item-section
          >
        </q-item>

        <q-item to="/popular" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="add_business" size="2rem" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Popular NFT Marketplaces</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        placeholder="Search NFTweets"
        outlined
        rounded
        dense
        class="q-ma-md"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">NFT TRADES</q-item-label>
            <q-item-label class="text-weight-bold"
              >New NFTs Coming!</q-item-label
            >
            <q-item-label caption class="text-justify"
              >Our number one pick when it comes to new NFT projects is the
              Platinum Rollers Club collection from Lucky Block. Lucky Block has
              emerged as one of the best altcoins on the market, primarily due
              to the platform’s innovative crypto-lottery feature.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>23 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">NFT TRADES</q-item-label>
            <q-item-label class="text-weight-bold"
              >New NFTs Coming!</q-item-label
            >
            <q-item-label caption class="text-justify"
              >Another new NFT project that is garnering lots of attention is
              Silks. Silks is a blockchain-enabled metaverse that allows users
              to own, trade, and earn rewards from thoroughbred racing
              horses.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 hours ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">NFT TRADES</q-item-label>
            <q-item-label class="text-weight-bold"
              >New NFTs Coming!</q-item-label
            >
            <q-item-label caption class="text-justify"
              >For those wondering how to invest in NFTs, VeeFriends offers a
              beginner-friendly way to enter this growing market. VeeFriends is
              an NFT project created by Gary Vaynerchuk (GaryVee), the popular
              marketing guru with a huge social media following.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>8 hours ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
