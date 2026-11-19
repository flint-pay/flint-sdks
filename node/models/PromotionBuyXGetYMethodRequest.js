import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1651 as c1 } from '../descriptors/data/82.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10431 as c2, d10432 as c3, d10433 as c4, d10434 as c5 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10438 as c6, d10439 as c7, d10440 as c8, d10441 as c9, d10442 as c10, d10450 as c16, d10451 as c17, d10452 as c18, d10453 as c19 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9682 as c11, d9683 as c12, d9684 as c13, d9685 as c14, d9686 as c15 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1651 as d1651 } from '../descriptors/data/82.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1651;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2422"]:c6(),["SharedCodec2423"]:c7(),["SharedCodec2424"]:c8(),["SharedCodec2425"]:c9(),["SharedCodec2426"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2496"]:c16(),["SharedCodec2497"]:c17(),["SharedCodec2498"]:c18(),["SharedCodec2499"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
