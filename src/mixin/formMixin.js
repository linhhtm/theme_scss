const formMixin = {
    data: function(){
        return {
            valid: true,
        }
    },
    computed:{
        formRules: function() {
            return {
                required: [
                    v => !!v || 'Field is required',
                ],
                email: [
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                maxLength: (length) => [
                    v => v.length <= length || `Field must be less than ${length} characters`,
                ]
            }
        }
    },
    methods: {
        getRules(rules){
            let arrRules = [];
            Array.isArray(rules) && rules.forEach(el => {
                if(el.indexOf(":") > -1){
                    const value = el.split(":")?.[1];
                    const ruleName = el.split(":")?.[0];
                    if(typeof this.formRules[ruleName] === "function"){
                        arrRules.push(...this.formRules[ruleName](value));
                    }
                } else
                arrRules.push(...this.formRules[el]);
            })
            return arrRules
        },
        validate (formRef = "form") {
            this.$refs[formRef].validate()
        },
    },
}

export default formMixin;