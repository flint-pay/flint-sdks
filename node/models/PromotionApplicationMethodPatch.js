import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c1 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10428 as c2, d10435 as c3, d10436 as c4, d10437 as c5 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10439 as c6, d10440 as c7, d10441 as c8, d10442 as c9, d10443 as c10, d10444 as c11, d10445 as c12, d10446 as c13, d10447 as c14, d10453 as c20, d10454 as c21, d10455 as c22, d10456 as c23 } from '../descriptors/data/492.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9684 as c15, d9685 as c16, d9686 as c17, d9687 as c18, d9688 as c19 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10428 as d10428 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2420"]:c6(),["SharedCodec2421"]:c7(),["SharedCodec2422"]:c8(),["SharedCodec2423"]:c9(),["SharedCodec2424"]:c10(),["SharedCodec2425"]:c11(),["SharedCodec2426"]:c12(),["SharedCodec2427"]:c13(),["SharedCodec2428"]:c14(),["SharedCodec2429"]:c15(),["SharedCodec2430"]:c16(),["SharedCodec2431"]:c17(),["SharedCodec2432"]:c18(),["SharedCodec2433"]:c19(),["SharedCodec2496"]:c20(),["SharedCodec2497"]:c21(),["SharedCodec2498"]:c22(),["SharedCodec2499"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
