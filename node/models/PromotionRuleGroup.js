import { d74 as c0, d453 as c1, d2036 as c2, d2037 as c3, d458 as c4, d456 as c5, d455 as c6, d454 as c7, d457 as c8, d2034 as c9, d2033 as c10, d2032 as c11, d2035 as c12 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2036 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec170"]:c4(),["SharedCodec171"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec522"]:c9(),["SharedCodec523"]:c10(),["SharedCodec524"]:c11(),["SharedCodec525"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
