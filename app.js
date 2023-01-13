Vue.createApp({
  data() {
    return {
      list: ["Emma", "Neil", "Nick", "Rick"],
      memberName: "",
    };
  },
  methods: {
    pickPerson: function() {
      let randomNumber = Math.floor(Math.random() * this.list.length);
      this.memberName = this.list[randomNumber];
    },
  },
}).mount("#app");
