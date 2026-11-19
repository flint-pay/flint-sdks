import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c1 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10378 as c2, d10383 as c3, d10384 as c4, d10385 as c5, d10386 as c6 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10388 as c7, d10391 as c8, d10392 as c9, d10393 as c10, d10394 as c11, d10395 as c12, d10398 as c18, d10399 as c19, d10400 as c20, d10403 as c21, d10404 as c22, d10405 as c23, d10406 as c24 } from '../descriptors/data/485.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9641 as c13, d9642 as c14, d9643 as c15, d9644 as c16, d9645 as c17 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10378 as d10378 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2433"]:c13(),["SharedCodec2434"]:c14(),["SharedCodec2435"]:c15(),["SharedCodec2436"]:c16(),["SharedCodec2437"]:c17(),["SharedCodec2439"]:c18(),["SharedCodec2440"]:c19(),["SharedCodec2441"]:c20(),["SharedCodec2500"]:c21(),["SharedCodec2501"]:c22(),["SharedCodec2502"]:c23(),["SharedCodec2503"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
