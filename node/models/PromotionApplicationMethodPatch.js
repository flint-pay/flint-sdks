import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c1 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10377 as c2, d10384 as c3, d10385 as c4, d10386 as c5 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10389 as c6, d10390 as c7, d10391 as c8, d10392 as c9, d10393 as c10, d10394 as c11, d10395 as c12, d10396 as c13, d10397 as c14, d10403 as c20, d10404 as c21, d10405 as c22, d10406 as c23 } from '../descriptors/data/485.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9641 as c15, d9642 as c16, d9643 as c17, d9644 as c18, d9645 as c19 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10377 as d10377 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2424"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2434"]:c16(),["SharedCodec2435"]:c17(),["SharedCodec2436"]:c18(),["SharedCodec2437"]:c19(),["SharedCodec2500"]:c20(),["SharedCodec2501"]:c21(),["SharedCodec2502"]:c22(),["SharedCodec2503"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
