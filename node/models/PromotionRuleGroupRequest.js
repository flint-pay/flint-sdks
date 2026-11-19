import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10405 as c1, d10406 as c2, d10407 as c3 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10412 as c4, d10413 as c5, d10414 as c6, d10415 as c7, d10416 as c8, d10424 as c9, d10425 as c10, d10426 as c11, d10427 as c12 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10405 as d10405 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2419"]:c4(),["SharedCodec2420"]:c5(),["SharedCodec2421"]:c6(),["SharedCodec2422"]:c7(),["SharedCodec2423"]:c8(),["SharedCodec2493"]:c9(),["SharedCodec2494"]:c10(),["SharedCodec2495"]:c11(),["SharedCodec2496"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
