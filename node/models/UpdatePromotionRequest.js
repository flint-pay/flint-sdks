import { d323 as c0, d2076 as c1, d2082 as c2, d2083 as c3, d2087 as c4, d424 as c5, d2096 as c6, d2097 as c7, d2098 as c8, d429 as c9, d427 as c10, d426 as c11, d425 as c12, d428 as c13, d2075 as c14, d2085 as c15, d2086 as c16, d2094 as c17, d2093 as c18, d2092 as c19, d2095 as c20, d2543 as c21 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2543 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec141"]:c9(),["SharedCodec142"]:c10(),["SharedCodec143"]:c11(),["SharedCodec144"]:c12(),["SharedCodec145"]:c13(),["SharedCodec512"]:c14(),["SharedCodec513"]:c15(),["SharedCodec514"]:c16(),["SharedCodec517"]:c17(),["SharedCodec518"]:c18(),["SharedCodec519"]:c19(),["SharedCodec520"]:c20(),["UpdatePromotionRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
