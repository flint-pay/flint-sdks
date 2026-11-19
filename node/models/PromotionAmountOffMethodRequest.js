import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c1 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1643 as c2 } from '../descriptors/data/82.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10404 as c3, d10405 as c4, d10406 as c5, d10407 as c6 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10409 as c7, d10412 as c8, d10413 as c9, d10414 as c10, d10415 as c11, d10416 as c12, d10424 as c18, d10425 as c19, d10426 as c20, d10427 as c21 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c13, d9663 as c14, d9664 as c15, d9665 as c16, d9666 as c17 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1643 as d1643 } from '../descriptors/data/82.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionAmountOffMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2413"]:c7(),["SharedCodec2419"]:c8(),["SharedCodec2420"]:c9(),["SharedCodec2421"]:c10(),["SharedCodec2422"]:c11(),["SharedCodec2423"]:c12(),["SharedCodec2426"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2429"]:c16(),["SharedCodec2430"]:c17(),["SharedCodec2493"]:c18(),["SharedCodec2494"]:c19(),["SharedCodec2495"]:c20(),["SharedCodec2496"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
