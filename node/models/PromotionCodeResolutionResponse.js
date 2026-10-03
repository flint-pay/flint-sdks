import { d74 as c0, d1786 as c1, d1785 as c2, d2018 as c3, d2021 as c4, d2023 as c5, d2025 as c6, d2026 as c7, d2017 as c8, d2028 as c9, d2029 as c10, d2019 as c11, d455 as c12, d2039 as c13, d2040 as c14, d2041 as c15, d2121 as c16, d2122 as c17, d460 as c18, d458 as c19, d457 as c20, d456 as c21, d459 as c22, d2020 as c23, d2037 as c24, d2036 as c25, d2035 as c26, d2038 as c27 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2026 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeResolution"]:c6(),["PromotionCodeResolutionResponse"]:c7(),["PromotionCodesSummary"]:c8(),["PromotionCombinesWith"]:c9(),["PromotionExclusivity"]:c10(),["PromotionRecurrence"]:c11(),["PromotionRule"]:c12(),["PromotionRuleGroup"]:c13(),["PromotionRuleValue"]:c14(),["PromotionSchedule"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SharedCodec170"]:c18(),["SharedCodec171"]:c19(),["SharedCodec172"]:c20(),["SharedCodec173"]:c21(),["SharedCodec174"]:c22(),["SharedCodec519"]:c23(),["SharedCodec522"]:c24(),["SharedCodec523"]:c25(),["SharedCodec524"]:c26(),["SharedCodec525"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolutionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
