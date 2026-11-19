import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10432 as c1, d10433 as c2, d10434 as c3 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10438 as c4, d10439 as c5, d10440 as c6, d10441 as c7, d10442 as c8, d10450 as c9, d10451 as c10, d10452 as c11, d10453 as c12 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10432 as d10432 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2422"]:c4(),["SharedCodec2423"]:c5(),["SharedCodec2424"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2496"]:c9(),["SharedCodec2497"]:c10(),["SharedCodec2498"]:c11(),["SharedCodec2499"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
