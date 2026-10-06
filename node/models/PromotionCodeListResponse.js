import { d77 as c0, d1797 as c1, d1796 as c2, d2030 as c3, d2033 as c4, d2035 as c5, d2036 as c6, d2029 as c7, d2038 as c8, d2039 as c9, d2031 as c10, d458 as c11, d2049 as c12, d2050 as c13, d2051 as c14, d2131 as c15, d2132 as c16, d14 as c17, d463 as c18, d461 as c19, d460 as c20, d459 as c21, d462 as c22, d1795 as c23, d2032 as c24, d2047 as c25, d2046 as c26, d2045 as c27, d2048 as c28 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2036 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeListResponse"]:c6(),["PromotionCodesSummary"]:c7(),["PromotionCombinesWith"]:c8(),["PromotionExclusivity"]:c9(),["PromotionRecurrence"]:c10(),["PromotionRule"]:c11(),["PromotionRuleGroup"]:c12(),["PromotionRuleValue"]:c13(),["PromotionSchedule"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec175"]:c21(),["SharedCodec176"]:c22(),["SharedCodec485"]:c23(),["SharedCodec529"]:c24(),["SharedCodec532"]:c25(),["SharedCodec533"]:c26(),["SharedCodec534"]:c27(),["SharedCodec535"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
