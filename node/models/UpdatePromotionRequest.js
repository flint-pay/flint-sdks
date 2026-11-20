import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c1 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10428 as c2, d10431 as c3, d10435 as c4, d10436 as c5, d10437 as c6 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10439 as c7, d10440 as c8, d10441 as c9, d10442 as c10, d10443 as c11, d10444 as c12, d10445 as c13, d10446 as c14, d10447 as c15, d10453 as c21, d10454 as c22, d10455 as c23, d10456 as c24, d10457 as c27, d10458 as c28, d10459 as c29, d10460 as c30, d10461 as c31, d10462 as c32 } from '../descriptors/data/492.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9684 as c16, d9685 as c17, d9686 as c18, d9687 as c19, d9688 as c20 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8049 as c25 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8145 as c26 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7789 as c33 } from '../descriptors/data/329.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7789 as d7789 } from '../descriptors/data/329.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2421"]:c8(),["SharedCodec2422"]:c9(),["SharedCodec2423"]:c10(),["SharedCodec2424"]:c11(),["SharedCodec2425"]:c12(),["SharedCodec2426"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2429"]:c16(),["SharedCodec2430"]:c17(),["SharedCodec2431"]:c18(),["SharedCodec2432"]:c19(),["SharedCodec2433"]:c20(),["SharedCodec2496"]:c21(),["SharedCodec2497"]:c22(),["SharedCodec2498"]:c23(),["SharedCodec2499"]:c24(),["SharedCodec3073"]:c25(),["SharedCodec3076"]:c26(),["SharedCodec3171"]:c27(),["SharedCodec3172"]:c28(),["SharedCodec3173"]:c29(),["SharedCodec3174"]:c30(),["SharedCodec3175"]:c31(),["SharedCodec3176"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
