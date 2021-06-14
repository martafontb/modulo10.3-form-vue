 new Vue({
    el: '#app',
      data() {
        return {
          name:"",
          mobile: "",
          postcode: "",
          email: ""
      };
    },
    methods: {
      GetValidationMethod(value){
        console.log(value)
      },
      SubmitForm(){
        console.log(hello)
      }
    }
})



  

