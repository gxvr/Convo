new Vue({
  el: '.container',
  data: function data() {return {
      users: [],
      errors: [],
      show: true };},


  mounted: function mounted() {
    this.getUsers();
  },

  methods: {
    getUsers: function getUsers() {var _this = this;
      axios.get('https://randomuser.me/api/?results=3').
      then(function (response) {
        console.log(JSON.stringify(response.data.results));
        _this.users = response.data.results;
      }).
      catch(function (e) {
        _this.errors.push(e);
      });
    } },


  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    } } });