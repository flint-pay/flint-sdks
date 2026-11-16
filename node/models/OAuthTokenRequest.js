import { d1003 as c0 } from '../descriptors/data/48.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7667 as c1, d7668 as c2, d7669 as c3, d7670 as c4, d7671 as c5, d7672 as c6, d7673 as c7 } from '../descriptors/data/367.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7674 as c8, d7675 as c9, d7676 as c10 } from '../descriptors/data/368.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1003 as d1003 } from '../descriptors/data/48.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1039"]:c1(),["SharedCodec1040"]:c2(),["SharedCodec1041"]:c3(),["SharedCodec1042"]:c4(),["SharedCodec1043"]:c5(),["SharedCodec1044"]:c6(),["SharedCodec1045"]:c7(),["SharedCodec1046"]:c8(),["SharedCodec1047"]:c9(),["SharedCodec1048"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
