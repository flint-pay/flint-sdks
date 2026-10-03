import { d74 as c0, d2016 as c1, d2019 as c2, d2021 as c3, d2023 as c4, d2015 as c5, d2026 as c6, d2027 as c7, d2017 as c8, d453 as c9, d2037 as c10, d2038 as c11, d2039 as c12, d458 as c13, d456 as c14, d455 as c15, d454 as c16, d457 as c17, d2018 as c18, d2035 as c19, d2034 as c20, d2033 as c21, d2036 as c22 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2023 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodeResolution"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionRule"]:c9(),["PromotionRuleGroup"]:c10(),["PromotionRuleValue"]:c11(),["PromotionSchedule"]:c12(),["SharedCodec170"]:c13(),["SharedCodec171"]:c14(),["SharedCodec172"]:c15(),["SharedCodec173"]:c16(),["SharedCodec174"]:c17(),["SharedCodec519"]:c18(),["SharedCodec522"]:c19(),["SharedCodec523"]:c20(),["SharedCodec524"]:c21(),["SharedCodec525"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
