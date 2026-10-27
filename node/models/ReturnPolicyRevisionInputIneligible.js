import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d919 as c1 } from '../descriptors/data/40.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4873 as c2, d4874 as c3, d4875 as c4, d4876 as c5, d4878 as c6, d4879 as c7, d4880 as c8, d4881 as c9 } from '../descriptors/data/220.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4889 as c10, d4890 as c11, d4891 as c12, d4892 as c13 } from '../descriptors/data/221.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d919 as d919 } from '../descriptors/data/40.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d919;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1083"]:c6(),["SharedCodec1084"]:c7(),["SharedCodec1085"]:c8(),["SharedCodec1086"]:c9(),["SharedCodec1094"]:c10(),["SharedCodec1095"]:c11(),["SharedCodec1096"]:c12(),["SharedCodec1097"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
