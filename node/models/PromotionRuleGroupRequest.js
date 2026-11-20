import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10435 as c1, d10436 as c2, d10437 as c3 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10441 as c4, d10442 as c5, d10443 as c6, d10444 as c7, d10445 as c8, d10453 as c9, d10454 as c10, d10455 as c11, d10456 as c12 } from '../descriptors/data/492.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10435 as d10435 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10435;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2422"]:c4(),["SharedCodec2423"]:c5(),["SharedCodec2424"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2496"]:c9(),["SharedCodec2497"]:c10(),["SharedCodec2498"]:c11(),["SharedCodec2499"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
