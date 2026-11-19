import { d368 as c0 } from '../descriptors/data/21.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c3 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10426 as c4, d10427 as c5, d10429 as c6, d10430 as c7, d10431 as c8, d10432 as c9, d10433 as c10, d10434 as c11 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10435 as c12, d10438 as c14, d10439 as c15, d10440 as c16, d10441 as c17, d10442 as c18, d10445 as c24, d10446 as c25, d10447 as c26, d10450 as c27, d10451 as c28, d10452 as c29, d10453 as c30 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10262 as c13 } from '../descriptors/data/481.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9682 as c19, d9683 as c20, d9684 as c21, d9685 as c22, d9686 as c23 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d368 as d368 } from '../descriptors/data/21.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2416"]:c13(),["SharedCodec2422"]:c14(),["SharedCodec2423"]:c15(),["SharedCodec2424"]:c16(),["SharedCodec2425"]:c17(),["SharedCodec2426"]:c18(),["SharedCodec2429"]:c19(),["SharedCodec2430"]:c20(),["SharedCodec2431"]:c21(),["SharedCodec2432"]:c22(),["SharedCodec2433"]:c23(),["SharedCodec2435"]:c24(),["SharedCodec2436"]:c25(),["SharedCodec2437"]:c26(),["SharedCodec2496"]:c27(),["SharedCodec2497"]:c28(),["SharedCodec2498"]:c29(),["SharedCodec2499"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
