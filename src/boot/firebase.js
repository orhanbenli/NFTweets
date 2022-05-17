// quasar/src/boot
import { firebaseInit } from "@gcto/firebase-hooks";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.use(() => {
    firebaseInit({
      apiKey: "AIzaSyDON4lhWX9F_mO1fBVYmtyD66oZuoVOXfw",
      authDomain: "nftweets-7efeb.firebaseapp.com",
      projectId: "nftweets-7efeb",
      storageBucket: "nftweets-7efeb.appspot.com",
      messagingSenderId: "404271313704",
      appId: "1:404271313704:web:99181b61c6bb0872fb561d"
    });
  });
});


// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDON4lhWX9F_mO1fBVYmtyD66oZuoVOXfw",
//   authDomain: "nftweets-7efeb.firebaseapp.com",
//   projectId: "nftweets-7efeb",
//   storageBucket: "nftweets-7efeb.appspot.com",
//   messagingSenderId: "404271313704",
//   appId: "1:404271313704:web:99181b61c6bb0872fb561d"
// };

// firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();

// export default db;