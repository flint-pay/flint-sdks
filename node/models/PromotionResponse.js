import { d74 as c0, d1784 as c1, d1783 as c2, d2015 as c3, d2018 as c4, d2014 as c5, d2025 as c6, d2026 as c7, d2016 as c8, d2031 as c9, d453 as c10, d2036 as c11, d2037 as c12, d2038 as c13, d2118 as c14, d2119 as c15, d458 as c16, d456 as c17, d455 as c18, d454 as c19, d457 as c20, d2017 as c21, d2034 as c22, d2033 as c23, d2032 as c24, d2035 as c25 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2031 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2031;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionResponse"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec170"]:c16(),["SharedCodec171"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec519"]:c21(),["SharedCodec522"]:c22(),["SharedCodec523"]:c23(),["SharedCodec524"]:c24(),["SharedCodec525"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
