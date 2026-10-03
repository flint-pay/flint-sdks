import { d74 as c0, d2018 as c1, d2021 as c2, d2023 as c3, d2025 as c4, d2017 as c5, d2028 as c6, d2029 as c7, d2019 as c8, d455 as c9, d2039 as c10, d2040 as c11, d2041 as c12, d460 as c13, d458 as c14, d457 as c15, d456 as c16, d459 as c17, d2020 as c18, d2037 as c19, d2036 as c20, d2035 as c21, d2038 as c22 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2025 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodeResolution"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionRule"]:c9(),["PromotionRuleGroup"]:c10(),["PromotionRuleValue"]:c11(),["PromotionSchedule"]:c12(),["SharedCodec170"]:c13(),["SharedCodec171"]:c14(),["SharedCodec172"]:c15(),["SharedCodec173"]:c16(),["SharedCodec174"]:c17(),["SharedCodec519"]:c18(),["SharedCodec522"]:c19(),["SharedCodec523"]:c20(),["SharedCodec524"]:c21(),["SharedCodec525"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
