import { d462 as c0, d469 as c1, d77 as c2, d2059 as c3, d2064 as c4, d2065 as c5, d2057 as c6, d463 as c7, d2075 as c8, d2076 as c9, d2077 as c10, d468 as c11, d466 as c12, d465 as c13, d464 as c14, d467 as c15, d2058 as c16, d2073 as c17, d2072 as c18, d2071 as c19, d2074 as c20 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d469 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec175"]:c14(),["SharedCodec176"]:c15(),["SharedCodec531"]:c16(),["SharedCodec534"]:c17(),["SharedCodec535"]:c18(),["SharedCodec536"]:c19(),["SharedCodec537"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
