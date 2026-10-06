import { d77 as c0, d2033 as c1, d2031 as c2, d458 as c3, d2049 as c4, d2050 as c5, d463 as c6, d461 as c7, d460 as c8, d459 as c9, d462 as c10, d2032 as c11, d2047 as c12, d2046 as c13, d2045 as c14, d2048 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2033 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2033;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec529"]:c11(),["SharedCodec532"]:c12(),["SharedCodec533"]:c13(),["SharedCodec534"]:c14(),["SharedCodec535"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
