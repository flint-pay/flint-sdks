import { d366 as c0 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c3 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10378 as c4, d10379 as c5, d10381 as c6, d10382 as c7, d10383 as c8, d10384 as c9, d10385 as c10, d10386 as c11 } from '../descriptors/data/484.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10387 as c12, d10388 as c13, d10391 as c14, d10392 as c15, d10393 as c16, d10394 as c17, d10395 as c18, d10398 as c24, d10399 as c25, d10400 as c26, d10403 as c27, d10404 as c28, d10405 as c29, d10406 as c30 } from '../descriptors/data/485.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9641 as c19, d9642 as c20, d9643 as c21, d9644 as c22, d9645 as c23 } from '../descriptors/data/441.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d366 as d366 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2420"]:c13(),["SharedCodec2426"]:c14(),["SharedCodec2427"]:c15(),["SharedCodec2428"]:c16(),["SharedCodec2429"]:c17(),["SharedCodec2430"]:c18(),["SharedCodec2433"]:c19(),["SharedCodec2434"]:c20(),["SharedCodec2435"]:c21(),["SharedCodec2436"]:c22(),["SharedCodec2437"]:c23(),["SharedCodec2439"]:c24(),["SharedCodec2440"]:c25(),["SharedCodec2441"]:c26(),["SharedCodec2500"]:c27(),["SharedCodec2501"]:c28(),["SharedCodec2502"]:c29(),["SharedCodec2503"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
