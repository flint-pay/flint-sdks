import { d77 as c0, d2057 as c1, d2060 as c2, d2062 as c3, d2056 as c4, d2065 as c5, d2066 as c6, d2058 as c7, d463 as c8, d2076 as c9, d2077 as c10, d2078 as c11, d468 as c12, d466 as c13, d465 as c14, d464 as c15, d467 as c16, d2059 as c17, d2074 as c18, d2073 as c19, d2072 as c20, d2075 as c21 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2062 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec172"]:c12(),["SharedCodec173"]:c13(),["SharedCodec174"]:c14(),["SharedCodec175"]:c15(),["SharedCodec176"]:c16(),["SharedCodec532"]:c17(),["SharedCodec535"]:c18(),["SharedCodec536"]:c19(),["SharedCodec537"]:c20(),["SharedCodec538"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
