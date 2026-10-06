import { d77 as c0, d2030 as c1, d2033 as c2, d2029 as c3, d2038 as c4, d2039 as c5, d2031 as c6, d458 as c7, d2049 as c8, d2050 as c9, d2051 as c10, d463 as c11, d461 as c12, d460 as c13, d459 as c14, d462 as c15, d2032 as c16, d2047 as c17, d2046 as c18, d2045 as c19, d2048 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2030 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCodesSummary"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec175"]:c14(),["SharedCodec176"]:c15(),["SharedCodec529"]:c16(),["SharedCodec532"]:c17(),["SharedCodec533"]:c18(),["SharedCodec534"]:c19(),["SharedCodec535"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotion(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
