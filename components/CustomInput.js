const TYPES = [
  'text', 
  'password', 
  'email', 
  'number'
]

const includes = types => type => types.includes(type);

  Vue.component('custom-input', {
    template: '#custom-input', 
    inheritAttrs: false,
    data() {
      return {
        errors: false,
        valid : false, 
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
        default: 'text',
        validator (value) {
          const isValid = includes(TYPES)(value)
          if (!isValid) {
            console.warn(`allowed types are ${TYPES}`);
          }
          return isValid
        }
      },
    },

    model: {
        prop: "value",
        event: "update"
      },
    methods: {
   //make it toggle class 'is-invalid'      
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

        Validation(value){
    
          if( this.label === "Name" ){
              if( this.validName(value)){
              this.errors = false;
              this.valid = true;
              } else {
                console.log('wrong-name')
                this.errors = true;
              }
          }

          if( this.label === "Mobile" ){
              if( this.isNumeric(value)){
                this.errors = false;
                this.valid = true;
                  }else {
                    console.log('wrong-mobile')
                    this.errors = true;
                  }
          }

          if( this.label === "Postcode" ){
              if( this.isNumeric(value)){
                    this.errors = false;
                    this.valid = true;
                  }else {
                    console.log('wrong-postcode')
                    this.errors = true;
                  }
          }

          if( this.label === "Email" ){
              if( this.validEmail(value)){
                this.errors = false;
                this.valid = true;
                  }else {
                    console.log('wrong-email')
                    this.errors = true;
                  }
          }

          this.$emit('getvalidation',value)
    },
    }
  })

  

