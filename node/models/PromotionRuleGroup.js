import { d323 as c0, d424 as c1, d2097 as c2, d2098 as c3, d429 as c4, d427 as c5, d426 as c6, d425 as c7, d428 as c8, d2095 as c9, d2094 as c10, d2093 as c11, d2096 as c12 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2097 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2097;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec141"]:c4(),["SharedCodec142"]:c5(),["SharedCodec143"]:c6(),["SharedCodec144"]:c7(),["SharedCodec145"]:c8(),["SharedCodec517"]:c9(),["SharedCodec518"]:c10(),["SharedCodec519"]:c11(),["SharedCodec520"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
