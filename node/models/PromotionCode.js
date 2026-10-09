import { d323 as c0, d2057 as c1, d2059 as c2, d2061 as c3, d2064 as c4, d2065 as c5, d2066 as c6, d2070 as c7, d417 as c8, d2079 as c9, d2080 as c10, d2081 as c11, d422 as c12, d420 as c13, d419 as c14, d418 as c15, d421 as c16, d2058 as c17, d2068 as c18, d2069 as c19, d2077 as c20, d2076 as c21, d2075 as c22, d2078 as c23 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2061 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec136"]:c12(),["SharedCodec137"]:c13(),["SharedCodec138"]:c14(),["SharedCodec139"]:c15(),["SharedCodec140"]:c16(),["SharedCodec507"]:c17(),["SharedCodec508"]:c18(),["SharedCodec509"]:c19(),["SharedCodec512"]:c20(),["SharedCodec513"]:c21(),["SharedCodec514"]:c22(),["SharedCodec515"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
