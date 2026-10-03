import { d74 as c0, d2021 as c1, d2019 as c2, d455 as c3, d2039 as c4, d2040 as c5, d460 as c6, d458 as c7, d457 as c8, d456 as c9, d459 as c10, d2020 as c11, d2037 as c12, d2036 as c13, d2035 as c14, d2038 as c15 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2021 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2021;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec170"]:c6(),["SharedCodec171"]:c7(),["SharedCodec172"]:c8(),["SharedCodec173"]:c9(),["SharedCodec174"]:c10(),["SharedCodec519"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14(),["SharedCodec525"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
