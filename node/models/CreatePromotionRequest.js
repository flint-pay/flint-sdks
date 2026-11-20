import { d368 as c0 } from '../descriptors/data/21.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c1 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c3 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10429 as c4, d10430 as c5, d10432 as c6, d10433 as c7, d10434 as c8, d10435 as c9, d10436 as c10, d10437 as c11 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10438 as c12, d10441 as c14, d10442 as c15, d10443 as c16, d10444 as c17, d10445 as c18, d10448 as c24, d10449 as c25, d10450 as c26, d10453 as c27, d10454 as c28, d10455 as c29, d10456 as c30 } from '../descriptors/data/492.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10265 as c13 } from '../descriptors/data/482.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9684 as c19, d9685 as c20, d9686 as c21, d9687 as c22, d9688 as c23 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d368 as d368 } from '../descriptors/data/21.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2416"]:c13(),["SharedCodec2422"]:c14(),["SharedCodec2423"]:c15(),["SharedCodec2424"]:c16(),["SharedCodec2425"]:c17(),["SharedCodec2426"]:c18(),["SharedCodec2429"]:c19(),["SharedCodec2430"]:c20(),["SharedCodec2431"]:c21(),["SharedCodec2432"]:c22(),["SharedCodec2433"]:c23(),["SharedCodec2435"]:c24(),["SharedCodec2436"]:c25(),["SharedCodec2437"]:c26(),["SharedCodec2496"]:c27(),["SharedCodec2497"]:c28(),["SharedCodec2498"]:c29(),["SharedCodec2499"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
