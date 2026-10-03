import { d74 as c0, d1784 as c1, d1783 as c2, d2015 as c3, d2018 as c4, d2020 as c5, d2022 as c6, d2023 as c7, d2014 as c8, d2025 as c9, d2026 as c10, d2016 as c11, d453 as c12, d2036 as c13, d2037 as c14, d2038 as c15, d2118 as c16, d2119 as c17, d458 as c18, d456 as c19, d455 as c20, d454 as c21, d457 as c22, d2017 as c23, d2034 as c24, d2033 as c25, d2032 as c26, d2035 as c27 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2023 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeResolution"]:c6(),["PromotionCodeResolutionResponse"]:c7(),["PromotionCodesSummary"]:c8(),["PromotionCombinesWith"]:c9(),["PromotionExclusivity"]:c10(),["PromotionRecurrence"]:c11(),["PromotionRule"]:c12(),["PromotionRuleGroup"]:c13(),["PromotionRuleValue"]:c14(),["PromotionSchedule"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SharedCodec170"]:c18(),["SharedCodec171"]:c19(),["SharedCodec172"]:c20(),["SharedCodec173"]:c21(),["SharedCodec174"]:c22(),["SharedCodec519"]:c23(),["SharedCodec522"]:c24(),["SharedCodec523"]:c25(),["SharedCodec524"]:c26(),["SharedCodec525"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolutionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
