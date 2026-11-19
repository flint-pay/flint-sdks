import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c1 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10426 as c2, d10431 as c3, d10432 as c4, d10433 as c5, d10434 as c6 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10262 as c7 } from '../descriptors/data/481.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10438 as c8, d10439 as c9, d10440 as c10, d10441 as c11, d10442 as c12, d10445 as c18, d10446 as c19, d10447 as c20, d10450 as c21, d10451 as c22, d10452 as c23, d10453 as c24 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9682 as c13, d9683 as c14, d9684 as c15, d9685 as c16, d9686 as c17 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10426 as d10426 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2416"]:c7(),["SharedCodec2422"]:c8(),["SharedCodec2423"]:c9(),["SharedCodec2424"]:c10(),["SharedCodec2425"]:c11(),["SharedCodec2426"]:c12(),["SharedCodec2429"]:c13(),["SharedCodec2430"]:c14(),["SharedCodec2431"]:c15(),["SharedCodec2432"]:c16(),["SharedCodec2433"]:c17(),["SharedCodec2435"]:c18(),["SharedCodec2436"]:c19(),["SharedCodec2437"]:c20(),["SharedCodec2496"]:c21(),["SharedCodec2497"]:c22(),["SharedCodec2498"]:c23(),["SharedCodec2499"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
