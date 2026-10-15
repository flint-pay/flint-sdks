import { d323 as c0, d2076 as c1, d2087 as c2, d424 as c3, d2096 as c4, d2097 as c5, d429 as c6, d427 as c7, d426 as c8, d425 as c9, d428 as c10, d2075 as c11, d2085 as c12, d2086 as c13, d2094 as c14, d2093 as c15, d2092 as c16, d2095 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2076 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2076;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec141"]:c6(),["SharedCodec142"]:c7(),["SharedCodec143"]:c8(),["SharedCodec144"]:c9(),["SharedCodec145"]:c10(),["SharedCodec512"]:c11(),["SharedCodec513"]:c12(),["SharedCodec514"]:c13(),["SharedCodec517"]:c14(),["SharedCodec518"]:c15(),["SharedCodec519"]:c16(),["SharedCodec520"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
