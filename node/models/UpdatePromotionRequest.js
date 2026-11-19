import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c1 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10398 as c2, d10401 as c3, d10405 as c4, d10406 as c5, d10407 as c6 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10410 as c7, d10411 as c8, d10412 as c9, d10413 as c10, d10414 as c11, d10415 as c12, d10416 as c13, d10417 as c14, d10418 as c15, d10424 as c21, d10425 as c22, d10426 as c23, d10427 as c24, d10428 as c27, d10429 as c28, d10430 as c29, d10431 as c30, d10432 as c31, d10433 as c32 } from '../descriptors/data/491.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c16, d9663 as c17, d9664 as c18, d9665 as c19, d9666 as c20 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8036 as c25 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8132 as c26 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7778 as c33 } from '../descriptors/data/329.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7778 as d7778 } from '../descriptors/data/329.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2417"]:c7(),["SharedCodec2418"]:c8(),["SharedCodec2419"]:c9(),["SharedCodec2420"]:c10(),["SharedCodec2421"]:c11(),["SharedCodec2422"]:c12(),["SharedCodec2423"]:c13(),["SharedCodec2424"]:c14(),["SharedCodec2425"]:c15(),["SharedCodec2426"]:c16(),["SharedCodec2427"]:c17(),["SharedCodec2428"]:c18(),["SharedCodec2429"]:c19(),["SharedCodec2430"]:c20(),["SharedCodec2493"]:c21(),["SharedCodec2494"]:c22(),["SharedCodec2495"]:c23(),["SharedCodec2496"]:c24(),["SharedCodec3065"]:c25(),["SharedCodec3068"]:c26(),["SharedCodec3156"]:c27(),["SharedCodec3157"]:c28(),["SharedCodec3158"]:c29(),["SharedCodec3159"]:c30(),["SharedCodec3160"]:c31(),["SharedCodec3161"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
