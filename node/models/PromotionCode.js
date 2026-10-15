import { d323 as c0, d2074 as c1, d2076 as c2, d2078 as c3, d2081 as c4, d2082 as c5, d2083 as c6, d2087 as c7, d424 as c8, d2096 as c9, d2097 as c10, d2098 as c11, d429 as c12, d427 as c13, d426 as c14, d425 as c15, d428 as c16, d2075 as c17, d2085 as c18, d2086 as c19, d2094 as c20, d2093 as c21, d2092 as c22, d2095 as c23 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2078 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2078;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec141"]:c12(),["SharedCodec142"]:c13(),["SharedCodec143"]:c14(),["SharedCodec144"]:c15(),["SharedCodec145"]:c16(),["SharedCodec512"]:c17(),["SharedCodec513"]:c18(),["SharedCodec514"]:c19(),["SharedCodec517"]:c20(),["SharedCodec518"]:c21(),["SharedCodec519"]:c22(),["SharedCodec520"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
