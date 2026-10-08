import { d323 as c0, d1820 as c1, d1821 as c2, d2057 as c3, d2059 as c4, d2064 as c5, d2065 as c6, d2066 as c7, d2067 as c8, d2070 as c9, d417 as c10, d2079 as c11, d2080 as c12, d2081 as c13, d2162 as c14, d2163 as c15, d14 as c16, d422 as c17, d420 as c18, d419 as c19, d418 as c20, d421 as c21, d1819 as c22, d2058 as c23, d2068 as c24, d2069 as c25, d2077 as c26, d2076 as c27, d2075 as c28, d2078 as c29 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2067 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2067;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionListResponse"]:c8(),["PromotionRecurrence"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec136"]:c17(),["SharedCodec137"]:c18(),["SharedCodec138"]:c19(),["SharedCodec139"]:c20(),["SharedCodec140"]:c21(),["SharedCodec466"]:c22(),["SharedCodec507"]:c23(),["SharedCodec508"]:c24(),["SharedCodec509"]:c25(),["SharedCodec512"]:c26(),["SharedCodec513"]:c27(),["SharedCodec514"]:c28(),["SharedCodec515"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
