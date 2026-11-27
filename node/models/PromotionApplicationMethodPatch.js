import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c1 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10528 as c2 } from '../descriptors/data/496.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10535 as c3, d10536 as c4, d10537 as c5, d10539 as c6, d10540 as c7, d10541 as c8, d10542 as c9, d10543 as c10, d10544 as c11, d10545 as c12, d10546 as c13, d10547 as c14, d10553 as c20, d10554 as c21, d10555 as c22, d10556 as c23 } from '../descriptors/data/497.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9781 as c15, d9782 as c16, d9783 as c17 } from '../descriptors/data/452.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9784 as c18, d9785 as c19 } from '../descriptors/data/453.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10528 as d10528 } from '../descriptors/data/496.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10528;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2455"]:c6(),["SharedCodec2456"]:c7(),["SharedCodec2457"]:c8(),["SharedCodec2458"]:c9(),["SharedCodec2459"]:c10(),["SharedCodec2460"]:c11(),["SharedCodec2461"]:c12(),["SharedCodec2462"]:c13(),["SharedCodec2463"]:c14(),["SharedCodec2464"]:c15(),["SharedCodec2465"]:c16(),["SharedCodec2466"]:c17(),["SharedCodec2467"]:c18(),["SharedCodec2468"]:c19(),["SharedCodec2531"]:c20(),["SharedCodec2532"]:c21(),["SharedCodec2533"]:c22(),["SharedCodec2534"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
