import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c1 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10425 as c2, d10432 as c3, d10433 as c4, d10434 as c5 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10436 as c6, d10437 as c7, d10438 as c8, d10439 as c9, d10440 as c10, d10441 as c11, d10442 as c12, d10443 as c13, d10444 as c14, d10450 as c20, d10451 as c21, d10452 as c22, d10453 as c23 } from '../descriptors/data/491.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9682 as c15, d9683 as c16, d9684 as c17, d9685 as c18, d9686 as c19 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10425 as d10425 } from '../descriptors/data/490.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10425;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2420"]:c6(),["SharedCodec2421"]:c7(),["SharedCodec2422"]:c8(),["SharedCodec2423"]:c9(),["SharedCodec2424"]:c10(),["SharedCodec2425"]:c11(),["SharedCodec2426"]:c12(),["SharedCodec2427"]:c13(),["SharedCodec2428"]:c14(),["SharedCodec2429"]:c15(),["SharedCodec2430"]:c16(),["SharedCodec2431"]:c17(),["SharedCodec2432"]:c18(),["SharedCodec2433"]:c19(),["SharedCodec2496"]:c20(),["SharedCodec2497"]:c21(),["SharedCodec2498"]:c22(),["SharedCodec2499"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
