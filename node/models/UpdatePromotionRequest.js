import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c1 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10425 as c2, d10428 as c3, d10432 as c4, d10433 as c5, d10434 as c6 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10436 as c7, d10437 as c8, d10438 as c9, d10439 as c10, d10440 as c11, d10441 as c12, d10442 as c13, d10443 as c14, d10444 as c15, d10450 as c21, d10451 as c22, d10452 as c23, d10453 as c24, d10454 as c27, d10455 as c28, d10456 as c29, d10457 as c30, d10458 as c31, d10459 as c32 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9682 as c16, d9683 as c17, d9684 as c18, d9685 as c19, d9686 as c20 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8047 as c25 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c26 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7787 as c33 } from '../descriptors/data/329.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7787 as d7787 } from '../descriptors/data/329.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2421"]:c8(),["SharedCodec2422"]:c9(),["SharedCodec2423"]:c10(),["SharedCodec2424"]:c11(),["SharedCodec2425"]:c12(),["SharedCodec2426"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2429"]:c16(),["SharedCodec2430"]:c17(),["SharedCodec2431"]:c18(),["SharedCodec2432"]:c19(),["SharedCodec2433"]:c20(),["SharedCodec2496"]:c21(),["SharedCodec2497"]:c22(),["SharedCodec2498"]:c23(),["SharedCodec2499"]:c24(),["SharedCodec3071"]:c25(),["SharedCodec3074"]:c26(),["SharedCodec3169"]:c27(),["SharedCodec3170"]:c28(),["SharedCodec3171"]:c29(),["SharedCodec3172"]:c30(),["SharedCodec3173"]:c31(),["SharedCodec3174"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
