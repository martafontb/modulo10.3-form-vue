  Vue.component('custom-input', {
    template: '#custom-input', 
    inheritAttrs: false,
    data() {
      return {
        errors: false,
        valid: false
      };
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: '',
      }
      
    },

    model: {
        prop: "value",
        event: "update"
      },
    methods: {
  
        validName: function(name) {
          var re = /^[a-zA-Z]{6,13}$/;
          return re.test(name);
        },
        isNumeric: function (n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        },
        validEmail : function(email) {
          var re = /(.+)@(.+){2,}\.(.+){2,}/;
          return re.test(email);
        },
        validPassword: function(p) {
          var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,13}$/;
          return re.test(p);
        },

        Validation(value){
    
          if( this.label === "Name" ){
              if( this.validName(value)){
              this.errors = false;
              this.valid = true;
              } else {
                console.log('wrong-name')
                this.errors = true;
                this.valid = false;
              }
          }

          if( this.label === "Mobile" ){
              if( this.isNumeric(value)){
                this.errors = false;
                this.valid = true;
                  }else {
                    console.log('wrong-mobile')
                    this.errors = true;
                    this.valid = false;
                  }
          }

          if( this.label === "Postcode" ){
              if( this.isNumeric(value)){
                    this.errors = false;
                    this.valid = true;
                  }else {
                    console.log('wrong-postcode')
                    this.errors = true;
                    this.valid = false;
                  }
          }

          if( this.label === "Email" ){
              if( this.validEmail(value)){
                this.errors = false;
                this.valid = true;
                  }else {
                    console.log('wrong-email')
                    this.errors = true;
                    this.valid = false;
                  }
          }

          if( this.label === "Password" ){
            if( this.validPassword(value)){
              this.errors = false;
              this.valid = true;
                }else {
                  console.log('wrong-password')
                  this.errors = true;
                  this.valid = false;
                }
        }

          this.$emit('getvalidation', this.valid, this.label)
    },
    }
  })

  

