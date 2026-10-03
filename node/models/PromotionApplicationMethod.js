import { d74 as c0, d2019 as c1, d2017 as c2, d453 as c3, d2037 as c4, d2038 as c5, d458 as c6, d456 as c7, d455 as c8, d454 as c9, d457 as c10, d2018 as c11, d2035 as c12, d2034 as c13, d2033 as c14, d2036 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2019 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2019;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec170"]:c6(),["SharedCodec171"]:c7(),["SharedCodec172"]:c8(),["SharedCodec173"]:c9(),["SharedCodec174"]:c10(),["SharedCodec519"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14(),["SharedCodec525"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
