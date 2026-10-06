import { d77 as c0, d458 as c1, d2049 as c2, d2050 as c3, d463 as c4, d461 as c5, d460 as c6, d459 as c7, d462 as c8, d2047 as c9, d2046 as c10, d2045 as c11, d2048 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2049 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2049;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec172"]:c4(),["SharedCodec173"]:c5(),["SharedCodec174"]:c6(),["SharedCodec175"]:c7(),["SharedCodec176"]:c8(),["SharedCodec532"]:c9(),["SharedCodec533"]:c10(),["SharedCodec534"]:c11(),["SharedCodec535"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
