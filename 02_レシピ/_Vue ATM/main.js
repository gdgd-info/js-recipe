new Vue({
  el: "#app2",
  data: {
    drink: {
      name: "お茶", // 名前
      price: 120, // 値段
    },
    kattaKazu: 0,
  },
  methods: {
    kau: function() {
      this.kattaKazu += 1
    },
  },
})
