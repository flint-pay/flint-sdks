import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5034 as c1 } from '../descriptors/data/230.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5036 as c2, d5037 as c3, d5038 as c4, d5039 as c5, d5040 as c6, d5041 as c7, d5042 as c8, d5043 as c9, d5044 as c10, d5045 as c11, d5046 as c12, d5047 as c13, d5048 as c14, d5049 as c15 } from '../descriptors/data/231.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5034 as d5034 } from '../descriptors/data/230.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5034;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec1130"]:c2(),["SharedCodec1131"]:c3(),["SharedCodec1132"]:c4(),["SharedCodec1133"]:c5(),["SharedCodec213"]:c6(),["SharedCodec214"]:c7(),["SharedCodec215"]:c8(),["SharedCodec216"]:c9(),["SharedCodec217"]:c10(),["SharedCodec218"]:c11(),["SharedCodec219"]:c12(),["SharedCodec220"]:c13(),["SharedCodec221"]:c14(),["SharedCodec222"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
