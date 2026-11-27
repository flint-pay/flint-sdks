import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10535 as c1, d10536 as c2, d10537 as c3, d10541 as c4, d10542 as c5, d10543 as c6, d10544 as c7, d10545 as c8, d10553 as c9, d10554 as c10, d10555 as c11, d10556 as c12 } from '../descriptors/data/497.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10535 as d10535 } from '../descriptors/data/497.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10535;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2457"]:c4(),["SharedCodec2458"]:c5(),["SharedCodec2459"]:c6(),["SharedCodec2460"]:c7(),["SharedCodec2461"]:c8(),["SharedCodec2531"]:c9(),["SharedCodec2532"]:c10(),["SharedCodec2533"]:c11(),["SharedCodec2534"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
