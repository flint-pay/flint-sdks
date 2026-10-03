import { d74 as c0, d1786 as c1, d1785 as c2, d2018 as c3, d2021 as c4, d2017 as c5, d2028 as c6, d2029 as c7, d2030 as c8, d2019 as c9, d455 as c10, d2039 as c11, d2040 as c12, d2041 as c13, d2121 as c14, d2122 as c15, d460 as c16, d458 as c17, d457 as c18, d456 as c19, d459 as c20, d2020 as c21, d2037 as c22, d2036 as c23, d2035 as c24, d2038 as c25 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2030 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionListResponse"]:c8(),["PromotionRecurrence"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec170"]:c16(),["SharedCodec171"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec519"]:c21(),["SharedCodec522"]:c22(),["SharedCodec523"]:c23(),["SharedCodec524"]:c24(),["SharedCodec525"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
