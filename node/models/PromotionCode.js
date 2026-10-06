import { d77 as c0, d2056 as c1, d2059 as c2, d2061 as c3, d2055 as c4, d2064 as c5, d2065 as c6, d2057 as c7, d463 as c8, d2075 as c9, d2076 as c10, d2077 as c11, d468 as c12, d466 as c13, d465 as c14, d464 as c15, d467 as c16, d2058 as c17, d2073 as c18, d2072 as c19, d2071 as c20, d2074 as c21 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2061 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec172"]:c12(),["SharedCodec173"]:c13(),["SharedCodec174"]:c14(),["SharedCodec175"]:c15(),["SharedCodec176"]:c16(),["SharedCodec531"]:c17(),["SharedCodec534"]:c18(),["SharedCodec535"]:c19(),["SharedCodec536"]:c20(),["SharedCodec537"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
