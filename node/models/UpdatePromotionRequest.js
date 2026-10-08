import { d323 as c0, d2059 as c1, d2065 as c2, d2066 as c3, d2070 as c4, d417 as c5, d2079 as c6, d2080 as c7, d2081 as c8, d422 as c9, d420 as c10, d419 as c11, d418 as c12, d421 as c13, d2058 as c14, d2068 as c15, d2069 as c16, d2077 as c17, d2076 as c18, d2075 as c19, d2078 as c20, d2527 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2527 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2527;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec136"]:c9(),["SharedCodec137"]:c10(),["SharedCodec138"]:c11(),["SharedCodec139"]:c12(),["SharedCodec140"]:c13(),["SharedCodec507"]:c14(),["SharedCodec508"]:c15(),["SharedCodec509"]:c16(),["SharedCodec512"]:c17(),["SharedCodec513"]:c18(),["SharedCodec514"]:c19(),["SharedCodec515"]:c20(),["UpdatePromotionRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
