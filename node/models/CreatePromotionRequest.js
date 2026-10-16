import { d423 as c0, d430 as c1, d323 as c2, d2076 as c3, d2082 as c4, d2084 as c5, d2088 as c6, d424 as c7, d2097 as c8, d2098 as c9, d2099 as c10, d429 as c11, d427 as c12, d426 as c13, d425 as c14, d428 as c15, d2075 as c16, d2086 as c17, d2087 as c18, d2095 as c19, d2094 as c20, d2093 as c21, d2096 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d430 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d430;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivityRequest"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec141"]:c11(),["SharedCodec142"]:c12(),["SharedCodec143"]:c13(),["SharedCodec144"]:c14(),["SharedCodec145"]:c15(),["SharedCodec512"]:c16(),["SharedCodec513"]:c17(),["SharedCodec514"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["SharedCodec519"]:c21(),["SharedCodec520"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
