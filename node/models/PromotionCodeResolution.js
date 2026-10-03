import { d74 as c0, d2015 as c1, d2018 as c2, d2020 as c3, d2022 as c4, d2014 as c5, d2025 as c6, d2026 as c7, d2016 as c8, d453 as c9, d2036 as c10, d2037 as c11, d2038 as c12, d458 as c13, d456 as c14, d455 as c15, d454 as c16, d457 as c17, d2017 as c18, d2034 as c19, d2033 as c20, d2032 as c21, d2035 as c22 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2022 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2022;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodeResolution"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionRule"]:c9(),["PromotionRuleGroup"]:c10(),["PromotionRuleValue"]:c11(),["PromotionSchedule"]:c12(),["SharedCodec170"]:c13(),["SharedCodec171"]:c14(),["SharedCodec172"]:c15(),["SharedCodec173"]:c16(),["SharedCodec174"]:c17(),["SharedCodec519"]:c18(),["SharedCodec522"]:c19(),["SharedCodec523"]:c20(),["SharedCodec524"]:c21(),["SharedCodec525"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
