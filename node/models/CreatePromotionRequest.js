import { d423 as c0, d430 as c1, d323 as c2, d2076 as c3, d2082 as c4, d2083 as c5, d2087 as c6, d424 as c7, d2096 as c8, d2097 as c9, d2098 as c10, d429 as c11, d427 as c12, d426 as c13, d425 as c14, d428 as c15, d2075 as c16, d2085 as c17, d2086 as c18, d2094 as c19, d2093 as c20, d2092 as c21, d2095 as c22 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d430 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d430;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec141"]:c11(),["SharedCodec142"]:c12(),["SharedCodec143"]:c13(),["SharedCodec144"]:c14(),["SharedCodec145"]:c15(),["SharedCodec512"]:c16(),["SharedCodec513"]:c17(),["SharedCodec514"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["SharedCodec519"]:c21(),["SharedCodec520"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
