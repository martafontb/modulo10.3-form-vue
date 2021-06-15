 new Vue({
    el: '#app',
      data() {
        return {
          name:"",
          mobile: "",
          postcode: "",
          email: "",
          submitted: false
      };
    },
    methods: {
        resetInput() {
        this.name = "";
        this.mobile = "";
        this.postcode = "";
        this.email = "";
      },
      GetValidationMethod(value){

        if(this.name && this.mobile && this.postcode && this.email){
          console.log("Login function called")
          } else {
        }
        console.log({ name: this.name, mobile: this.mobile, postcode: this.postcode, email: this.email });

      },
      SubmitForm(e){        
            // if(){
            //   console.log('submitted')
            //   this.submitted = true;
            //   this.resetInput();
            // } else {
            //   this.submitted = false;
            //   e.preventDefault;
            //   alert('Form has errors')
            // }
      }
    }
})



  

