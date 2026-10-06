import { d457 as c0, d464 as c1, d77 as c2, d2033 as c3, d2038 as c4, d2039 as c5, d2031 as c6, d458 as c7, d2049 as c8, d2050 as c9, d2051 as c10, d463 as c11, d461 as c12, d460 as c13, d459 as c14, d462 as c15, d2032 as c16, d2047 as c17, d2046 as c18, d2045 as c19, d2048 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d464 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec175"]:c14(),["SharedCodec176"]:c15(),["SharedCodec529"]:c16(),["SharedCodec532"]:c17(),["SharedCodec533"]:c18(),["SharedCodec534"]:c19(),["SharedCodec535"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
