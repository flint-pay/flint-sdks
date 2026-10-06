import { d77 as c0, d2059 as c1, d2064 as c2, d2065 as c3, d2057 as c4, d463 as c5, d2075 as c6, d2076 as c7, d2077 as c8, d468 as c9, d466 as c10, d465 as c11, d464 as c12, d467 as c13, d2058 as c14, d2073 as c15, d2072 as c16, d2071 as c17, d2074 as c18, d2488 as c19 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2488 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec172"]:c9(),["SharedCodec173"]:c10(),["SharedCodec174"]:c11(),["SharedCodec175"]:c12(),["SharedCodec176"]:c13(),["SharedCodec531"]:c14(),["SharedCodec534"]:c15(),["SharedCodec535"]:c16(),["SharedCodec536"]:c17(),["SharedCodec537"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
