import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1674 as c1 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10534 as c2 } from '../descriptors/data/496.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10535 as c3, d10536 as c4, d10537 as c5, d10541 as c6, d10542 as c7, d10543 as c8, d10544 as c9, d10545 as c10, d10553 as c16, d10554 as c17, d10555 as c18, d10556 as c19 } from '../descriptors/data/497.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9781 as c11, d9782 as c12, d9783 as c13 } from '../descriptors/data/452.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9784 as c14, d9785 as c15 } from '../descriptors/data/453.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1674 as d1674 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1674;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2457"]:c6(),["SharedCodec2458"]:c7(),["SharedCodec2459"]:c8(),["SharedCodec2460"]:c9(),["SharedCodec2461"]:c10(),["SharedCodec2464"]:c11(),["SharedCodec2465"]:c12(),["SharedCodec2466"]:c13(),["SharedCodec2467"]:c14(),["SharedCodec2468"]:c15(),["SharedCodec2531"]:c16(),["SharedCodec2532"]:c17(),["SharedCodec2533"]:c18(),["SharedCodec2534"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
