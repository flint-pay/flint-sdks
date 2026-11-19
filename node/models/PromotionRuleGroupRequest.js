import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10384 as c1, d10385 as c2, d10386 as c3 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10391 as c4, d10392 as c5, d10393 as c6, d10394 as c7, d10395 as c8, d10403 as c9, d10404 as c10, d10405 as c11, d10406 as c12 } from '../descriptors/data/485.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10384 as d10384 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2426"]:c4(),["SharedCodec2427"]:c5(),["SharedCodec2428"]:c6(),["SharedCodec2429"]:c7(),["SharedCodec2430"]:c8(),["SharedCodec2500"]:c9(),["SharedCodec2501"]:c10(),["SharedCodec2502"]:c11(),["SharedCodec2503"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
