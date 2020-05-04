import * as PERSON from '../../resume/data.json';
import {
  terms
} from '../terms';
import {
  getLocalstorage
} from "@/services/utils.js";
// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        // person: this.$store.state.resumeData,
        terms: terms
      };
    },
    created: function() {
      // storage
      // let _data = getLocalstorage("resume_data");
      // if (_data) {
      //   this.person = JSON.parse(_data);
      // } else {
      //   this.person = PERSON;
      // }
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
