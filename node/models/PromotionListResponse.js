import { d323 as c0, d1823 as c1, d1824 as c2, d2074 as c3, d2076 as c4, d2081 as c5, d2082 as c6, d2083 as c7, d2084 as c8, d2087 as c9, d424 as c10, d2096 as c11, d2097 as c12, d2098 as c13, d2178 as c14, d2179 as c15, d14 as c16, d429 as c17, d427 as c18, d426 as c19, d425 as c20, d428 as c21, d1822 as c22, d2075 as c23, d2085 as c24, d2086 as c25, d2094 as c26, d2093 as c27, d2092 as c28, d2095 as c29 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2084 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2084;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionListResponse"]:c8(),["PromotionRecurrence"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec141"]:c17(),["SharedCodec142"]:c18(),["SharedCodec143"]:c19(),["SharedCodec144"]:c20(),["SharedCodec145"]:c21(),["SharedCodec467"]:c22(),["SharedCodec512"]:c23(),["SharedCodec513"]:c24(),["SharedCodec514"]:c25(),["SharedCodec517"]:c26(),["SharedCodec518"]:c27(),["SharedCodec519"]:c28(),["SharedCodec520"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
