<template>
  <div>
    <div>
      <h3>SignUp</h3>
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="pass">
      <button v-on:click="signUp">SignUp</button>
    </div>
    <div>
      <div v-if="!user">
        <h3>SignIn</h3>
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="pass">
        <button v-on:click="signIn">SignIn</button>
      </div>
      <div v-else>
        <h3>SignOut</h3>
        <button v-on:click="signOut">SignOut</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      user: null,
      email: '',
      pass: ''
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user
    })
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.pass)
      .then(user => console.log(user))
      .catch(err => console.error(err))
    },
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
      .then(user => console.log(user))
      .catch(err => console.error(err))
    },
    signOut: function() {
      firebase.auth().signOut()
      .then(() => this.user = null)
      .catch(err => console.error(err))
    }
  },
}
</script>
