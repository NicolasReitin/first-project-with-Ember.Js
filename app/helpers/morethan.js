import { helper } from '@ember/component/helper';


//2 params: the 2 numbers to compare
export default helper(function morethan(params/*, hash*/) {

    console.log("ore than ???");
    console.log(params[0]);
    console.log(params[1]);
    if(params[0] > params[1]) return true 
    return false

});
