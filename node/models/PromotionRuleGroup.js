import { d74 as c0, d453 as c1, d2037 as c2, d2038 as c3, d458 as c4, d456 as c5, d455 as c6, d454 as c7, d457 as c8, d2035 as c9, d2034 as c10, d2033 as c11, d2036 as c12 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2037 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2037;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec170"]:c4(),["SharedCodec171"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec522"]:c9(),["SharedCodec523"]:c10(),["SharedCodec524"]:c11(),["SharedCodec525"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
