import { d323 as c0, d424 as c1, d2096 as c2, d2097 as c3, d429 as c4, d427 as c5, d426 as c6, d425 as c7, d428 as c8, d2094 as c9, d2093 as c10, d2092 as c11, d2095 as c12 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2096 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2096;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec141"]:c4(),["SharedCodec142"]:c5(),["SharedCodec143"]:c6(),["SharedCodec144"]:c7(),["SharedCodec145"]:c8(),["SharedCodec517"]:c9(),["SharedCodec518"]:c10(),["SharedCodec519"]:c11(),["SharedCodec520"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
