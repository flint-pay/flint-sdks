import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1649 as c1 } from '../descriptors/data/82.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10404 as c2, d10405 as c3, d10406 as c4, d10407 as c5 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10412 as c6, d10413 as c7, d10414 as c8, d10415 as c9, d10416 as c10, d10424 as c16, d10425 as c17, d10426 as c18, d10427 as c19 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c11, d9663 as c12, d9664 as c13, d9665 as c14, d9666 as c15 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1649 as d1649 } from '../descriptors/data/82.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2419"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2421"]:c8(),["SharedCodec2422"]:c9(),["SharedCodec2423"]:c10(),["SharedCodec2426"]:c11(),["SharedCodec2427"]:c12(),["SharedCodec2428"]:c13(),["SharedCodec2429"]:c14(),["SharedCodec2430"]:c15(),["SharedCodec2493"]:c16(),["SharedCodec2494"]:c17(),["SharedCodec2495"]:c18(),["SharedCodec2496"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
