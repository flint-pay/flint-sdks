import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c1 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10398 as c2, d10405 as c3, d10406 as c4, d10407 as c5 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10410 as c6, d10411 as c7, d10412 as c8, d10413 as c9, d10414 as c10, d10415 as c11, d10416 as c12, d10417 as c13, d10418 as c14, d10424 as c20, d10425 as c21, d10426 as c22, d10427 as c23 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c15, d9663 as c16, d9664 as c17, d9665 as c18, d9666 as c19 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10398 as d10398 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2417"]:c6(),["SharedCodec2418"]:c7(),["SharedCodec2419"]:c8(),["SharedCodec2420"]:c9(),["SharedCodec2421"]:c10(),["SharedCodec2422"]:c11(),["SharedCodec2423"]:c12(),["SharedCodec2424"]:c13(),["SharedCodec2425"]:c14(),["SharedCodec2426"]:c15(),["SharedCodec2427"]:c16(),["SharedCodec2428"]:c17(),["SharedCodec2429"]:c18(),["SharedCodec2430"]:c19(),["SharedCodec2493"]:c20(),["SharedCodec2494"]:c21(),["SharedCodec2495"]:c22(),["SharedCodec2496"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
