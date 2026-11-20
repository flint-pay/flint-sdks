import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c1 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10429 as c2, d10434 as c3, d10435 as c4, d10436 as c5, d10437 as c6 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10265 as c7 } from '../descriptors/data/482.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10441 as c8, d10442 as c9, d10443 as c10, d10444 as c11, d10445 as c12, d10448 as c18, d10449 as c19, d10450 as c20, d10453 as c21, d10454 as c22, d10455 as c23, d10456 as c24 } from '../descriptors/data/492.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9684 as c13, d9685 as c14, d9686 as c15, d9687 as c16, d9688 as c17 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10429 as d10429 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2416"]:c7(),["SharedCodec2422"]:c8(),["SharedCodec2423"]:c9(),["SharedCodec2424"]:c10(),["SharedCodec2425"]:c11(),["SharedCodec2426"]:c12(),["SharedCodec2429"]:c13(),["SharedCodec2430"]:c14(),["SharedCodec2431"]:c15(),["SharedCodec2432"]:c16(),["SharedCodec2433"]:c17(),["SharedCodec2435"]:c18(),["SharedCodec2436"]:c19(),["SharedCodec2437"]:c20(),["SharedCodec2496"]:c21(),["SharedCodec2497"]:c22(),["SharedCodec2498"]:c23(),["SharedCodec2499"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
