<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-one-third">
          <div class="control">
            <input
              :class="inputClasses"
              type="text"
              placeholder="Goodreads UserID"
              v-model="userName"
              @change="resetError"
              @focus="resetError"
            />
            <p class="help" v-if="!hasError">
              Your UserID can be found by clicking on <b>profile</b> and copying the digits at the end of <b>https://www.goodreads.com/user/show/'</b> 
            </p>
            <p class="help has-text-danger" v-else>{{ error }}</p>
          </div>
          <br>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserNameInput',
  computed: {
    userName: {
      get() {
        return this.$store.getters['user/userId'];
      },
      set(value) {
        this.$store.dispatch('user/setUserId', value);
      },
    },
    error() {
      return this.$store.getters['books/error'];
    },
    hasError() {
      return !!this.error;
    },
    inputClasses() {
      return {
        input: true,
        'is-large': true,
        'is-danger': this.hasError,
      };
    },
  },
  methods: {
    resetError() {
      this.$store.dispatch('books/resetError');
    },
  },
};
</script>