import { d74 as c0, d2018 as c1, d2016 as c2, d453 as c3, d2036 as c4, d2037 as c5, d458 as c6, d456 as c7, d455 as c8, d454 as c9, d457 as c10, d2017 as c11, d2034 as c12, d2033 as c13, d2032 as c14, d2035 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2018 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2018;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec170"]:c6(),["SharedCodec171"]:c7(),["SharedCodec172"]:c8(),["SharedCodec173"]:c9(),["SharedCodec174"]:c10(),["SharedCodec519"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14(),["SharedCodec525"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
