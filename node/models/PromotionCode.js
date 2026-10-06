import { d77 as c0, d2030 as c1, d2033 as c2, d2035 as c3, d2029 as c4, d2038 as c5, d2039 as c6, d2031 as c7, d458 as c8, d2049 as c9, d2050 as c10, d2051 as c11, d463 as c12, d461 as c13, d460 as c14, d459 as c15, d462 as c16, d2032 as c17, d2047 as c18, d2046 as c19, d2045 as c20, d2048 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2035 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2035;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec172"]:c12(),["SharedCodec173"]:c13(),["SharedCodec174"]:c14(),["SharedCodec175"]:c15(),["SharedCodec176"]:c16(),["SharedCodec529"]:c17(),["SharedCodec532"]:c18(),["SharedCodec533"]:c19(),["SharedCodec534"]:c20(),["SharedCodec535"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
