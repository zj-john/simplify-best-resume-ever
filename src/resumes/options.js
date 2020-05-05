import {
  terms
} from '../terms';
// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        terms: terms
      };
    },
    created: function() {
    },
    computed: {
      person() {
        return JSON.parse(this.$store.state.resumeData)
      },
      lang () {
        const defaultLang = this.terms.en;
        const useLang = this.terms[this.person.lang];

        // overwrite non-set fields with default lang
        Object.keys(defaultLang)
          .filter(k => !useLang[k])
          .forEach(k => {
            console.log(k);
            useLang[k] = defaultLang[k];
          });

        return useLang;
      }
    }
  };
  return opt;
}

export {
  getVueOptions
};
