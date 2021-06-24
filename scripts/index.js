 new Vue({
    el: '#app',
      data() {
        return {
          name: "",
          validName: false,
          mobile: "",
          validMobile: false,
          postcode: "",
          validPostcode: false,
          email: "",
          validPostcode: false,
          password:"",
          validPassword:false,
          confirmation:"",
          validConfirmation:false,
          submitted: false,
          // validated: false
    }
  },
    methods: {
        resetInput() {
        this.name = "";
        this.mobile = "";
        this.postcode = "";
        this.email = "";
        this.password = "";
        this.confirmation = "";
      },
      GetValidationMethod(valid, label){
        // que es valid? 
        switch(label){
          case 'Name':
            if(valid === true) {
              this.validName = true
            } 
            break;
          case 'Mobile':
            if(valid === true) {
              this.validMobile = true
            }
            break; 
          case 'Postcode':
              if(valid === true) {
            this.validPostcode = true
            }
          break; 
          case 'Email':
            if(valid === true) {
              this.validEmail = true
              }
            break;
            case 'Password':
              if(valid === true) {
                this.validPassword = true
                }
              break;
        }
      },
      SubmitForm(e){   
        this.GetValidationMethod();
            if( this.validName && this.validMobile && this.validPostcode && this.validEmail && this.validPassword ){
              console.log('submitted')
              this.submitted = true;
              this.resetInput();
            } else {
              this.submitted = false;
              e.preventDefault;
              alert('Form has errors')
            }
      }
    }
})



  

