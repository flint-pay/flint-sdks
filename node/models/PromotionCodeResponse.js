import { d77 as c0, d1824 as c1, d1823 as c2, d2057 as c3, d2060 as c4, d2062 as c5, d2064 as c6, d2056 as c7, d2065 as c8, d2066 as c9, d2058 as c10, d463 as c11, d2076 as c12, d2077 as c13, d2078 as c14, d2158 as c15, d2159 as c16, d14 as c17, d468 as c18, d466 as c19, d465 as c20, d464 as c21, d467 as c22, d1822 as c23, d2059 as c24, d2074 as c25, d2073 as c26, d2072 as c27, d2075 as c28 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2064 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeResponse"]:c6(),["PromotionCodesSummary"]:c7(),["PromotionCombinesWith"]:c8(),["PromotionExclusivity"]:c9(),["PromotionRecurrence"]:c10(),["PromotionRule"]:c11(),["PromotionRuleGroup"]:c12(),["PromotionRuleValue"]:c13(),["PromotionSchedule"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec175"]:c21(),["SharedCodec176"]:c22(),["SharedCodec488"]:c23(),["SharedCodec532"]:c24(),["SharedCodec535"]:c25(),["SharedCodec536"]:c26(),["SharedCodec537"]:c27(),["SharedCodec538"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
