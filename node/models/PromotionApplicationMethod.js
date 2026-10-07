import { d77 as c0, d2060 as c1, d2058 as c2, d463 as c3, d2076 as c4, d2077 as c5, d468 as c6, d466 as c7, d465 as c8, d464 as c9, d467 as c10, d2059 as c11, d2074 as c12, d2073 as c13, d2072 as c14, d2075 as c15 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2060 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec532"]:c11(),["SharedCodec535"]:c12(),["SharedCodec536"]:c13(),["SharedCodec537"]:c14(),["SharedCodec538"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
