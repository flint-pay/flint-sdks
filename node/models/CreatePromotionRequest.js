import { d416 as c0, d423 as c1, d323 as c2, d2059 as c3, d2065 as c4, d2066 as c5, d2070 as c6, d417 as c7, d2079 as c8, d2080 as c9, d2081 as c10, d422 as c11, d420 as c12, d419 as c13, d418 as c14, d421 as c15, d2058 as c16, d2068 as c17, d2069 as c18, d2077 as c19, d2076 as c20, d2075 as c21, d2078 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d423 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec136"]:c11(),["SharedCodec137"]:c12(),["SharedCodec138"]:c13(),["SharedCodec139"]:c14(),["SharedCodec140"]:c15(),["SharedCodec507"]:c16(),["SharedCodec508"]:c17(),["SharedCodec509"]:c18(),["SharedCodec512"]:c19(),["SharedCodec513"]:c20(),["SharedCodec514"]:c21(),["SharedCodec515"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
