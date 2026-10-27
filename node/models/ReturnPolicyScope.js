import { d4873 as c0 } from '../descriptors/data/220.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4889 as c1, d4890 as c2, d4891 as c3, d4892 as c4 } from '../descriptors/data/221.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4873 as d4873 } from '../descriptors/data/220.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4873;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScope"]:c0(),["SharedCodec1094"]:c1(),["SharedCodec1095"]:c2(),["SharedCodec1096"]:c3(),["SharedCodec1097"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
