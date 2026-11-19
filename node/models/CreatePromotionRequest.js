import { d366 as c0 } from '../descriptors/data/21.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c1 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c3 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10399 as c4, d10400 as c5, d10402 as c6, d10403 as c7, d10404 as c8, d10405 as c9, d10406 as c10, d10407 as c11 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10408 as c12, d10409 as c13, d10412 as c14, d10413 as c15, d10414 as c16, d10415 as c17, d10416 as c18, d10419 as c24, d10420 as c25, d10421 as c26, d10424 as c27, d10425 as c28, d10426 as c29, d10427 as c30 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c19, d9663 as c20, d9664 as c21, d9665 as c22, d9666 as c23 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d366 as d366 } from '../descriptors/data/21.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2413"]:c13(),["SharedCodec2419"]:c14(),["SharedCodec2420"]:c15(),["SharedCodec2421"]:c16(),["SharedCodec2422"]:c17(),["SharedCodec2423"]:c18(),["SharedCodec2426"]:c19(),["SharedCodec2427"]:c20(),["SharedCodec2428"]:c21(),["SharedCodec2429"]:c22(),["SharedCodec2430"]:c23(),["SharedCodec2432"]:c24(),["SharedCodec2433"]:c25(),["SharedCodec2434"]:c26(),["SharedCodec2493"]:c27(),["SharedCodec2494"]:c28(),["SharedCodec2495"]:c29(),["SharedCodec2496"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
