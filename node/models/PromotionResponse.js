import { d77 as c0, d1797 as c1, d1796 as c2, d2030 as c3, d2033 as c4, d2029 as c5, d2038 as c6, d2039 as c7, d2031 as c8, d2044 as c9, d458 as c10, d2049 as c11, d2050 as c12, d2051 as c13, d2131 as c14, d2132 as c15, d14 as c16, d463 as c17, d461 as c18, d460 as c19, d459 as c20, d462 as c21, d1795 as c22, d2032 as c23, d2047 as c24, d2046 as c25, d2045 as c26, d2048 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2044 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2044;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionResponse"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec172"]:c17(),["SharedCodec173"]:c18(),["SharedCodec174"]:c19(),["SharedCodec175"]:c20(),["SharedCodec176"]:c21(),["SharedCodec485"]:c22(),["SharedCodec529"]:c23(),["SharedCodec532"]:c24(),["SharedCodec533"]:c25(),["SharedCodec534"]:c26(),["SharedCodec535"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
