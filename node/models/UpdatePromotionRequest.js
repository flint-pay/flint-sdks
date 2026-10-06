import { d77 as c0, d2033 as c1, d2038 as c2, d2039 as c3, d2031 as c4, d458 as c5, d2049 as c6, d2050 as c7, d2051 as c8, d463 as c9, d461 as c10, d460 as c11, d459 as c12, d462 as c13, d2032 as c14, d2047 as c15, d2046 as c16, d2045 as c17, d2048 as c18, d2462 as c19 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2462 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec172"]:c9(),["SharedCodec173"]:c10(),["SharedCodec174"]:c11(),["SharedCodec175"]:c12(),["SharedCodec176"]:c13(),["SharedCodec529"]:c14(),["SharedCodec532"]:c15(),["SharedCodec533"]:c16(),["SharedCodec534"]:c17(),["SharedCodec535"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
