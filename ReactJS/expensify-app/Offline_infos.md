# Firebase 101

## Getting Firebase

### Integrate Firebase into web app

```HTML
<script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9JW2n28v48RBLPg91yM_lh_0qKBhZ7Y8",
    authDomain: "expensify-63ddf.firebaseapp.com",
    databaseURL: "https://expensify-63ddf.firebaseio.com",
    projectId: "expensify-63ddf",
    storageBucket: "expensify-63ddf.appspot.com",
    messagingSenderId: "877933190254"
  };
  firebase.initializeApp(config);
</script>
```
