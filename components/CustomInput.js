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
        
  Validation(value){

        //validation
        if( this.label === "Name" ){
            if( this.validName(value)){
            return true;
            }
        }

        if( this.label === "Mobile" ){
            if( this.validNumber(value)){
                // return true;
                }
        }

        if( this.label === "Postcode" ){
            if( this.validNumber(value)){
                // return true;
                }
        }

        if( this.label === "Email" ){
            if( this.validEmail(value)){
                // return true;
                }
        }

        this.$emit('GetValidation',value)
    }
    },
    validName: function(name) {
      var re = /^[a-zA-Z]{6,13}$/;
      return re.test(name);
  },
    validNumber: function(number) {
      var re = /^[0-9]*$/;
      return re.test(number);
  },
    validEmail : function(email) {
        var re = /(.+)@(.+){2,}\.(.+){2,}/;
        return re.test(email);
    },

    resetInput() {
        this.name = "";
        this.mobile = "";
        this.postcode = "";
        this.email = "";
    }
      
  })
