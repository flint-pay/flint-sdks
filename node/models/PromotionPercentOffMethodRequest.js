import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1668 as c1 } from '../descriptors/data/83.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10383 as c2, d10384 as c3, d10385 as c4, d10386 as c5 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10391 as c6, d10392 as c7, d10393 as c8, d10394 as c9, d10395 as c10, d10403 as c16, d10404 as c17, d10405 as c18, d10406 as c19 } from '../descriptors/data/485.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9641 as c11, d9642 as c12, d9643 as c13, d9644 as c14, d9645 as c15 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1668 as d1668 } from '../descriptors/data/83.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2426"]:c6(),["SharedCodec2427"]:c7(),["SharedCodec2428"]:c8(),["SharedCodec2429"]:c9(),["SharedCodec2430"]:c10(),["SharedCodec2433"]:c11(),["SharedCodec2434"]:c12(),["SharedCodec2435"]:c13(),["SharedCodec2436"]:c14(),["SharedCodec2437"]:c15(),["SharedCodec2500"]:c16(),["SharedCodec2501"]:c17(),["SharedCodec2502"]:c18(),["SharedCodec2503"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
