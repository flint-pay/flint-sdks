import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c1 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10528 as c2, d10531 as c3 } from '../descriptors/data/496.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10535 as c4, d10536 as c5, d10537 as c6, d10539 as c7, d10540 as c8, d10541 as c9, d10542 as c10, d10543 as c11, d10544 as c12, d10545 as c13, d10546 as c14, d10547 as c15, d10553 as c21, d10554 as c22, d10555 as c23, d10556 as c24, d10557 as c27, d10558 as c28, d10559 as c29 } from '../descriptors/data/497.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9781 as c16, d9782 as c17, d9783 as c18 } from '../descriptors/data/452.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9784 as c19, d9785 as c20 } from '../descriptors/data/453.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8132 as c25 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8234 as c26 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10560 as c30, d10561 as c31, d10562 as c32 } from '../descriptors/data/498.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7872 as c33 } from '../descriptors/data/334.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7872 as d7872 } from '../descriptors/data/334.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2455"]:c7(),["SharedCodec2456"]:c8(),["SharedCodec2457"]:c9(),["SharedCodec2458"]:c10(),["SharedCodec2459"]:c11(),["SharedCodec2460"]:c12(),["SharedCodec2461"]:c13(),["SharedCodec2462"]:c14(),["SharedCodec2463"]:c15(),["SharedCodec2464"]:c16(),["SharedCodec2465"]:c17(),["SharedCodec2466"]:c18(),["SharedCodec2467"]:c19(),["SharedCodec2468"]:c20(),["SharedCodec2531"]:c21(),["SharedCodec2532"]:c22(),["SharedCodec2533"]:c23(),["SharedCodec2534"]:c24(),["SharedCodec3128"]:c25(),["SharedCodec3131"]:c26(),["SharedCodec3227"]:c27(),["SharedCodec3228"]:c28(),["SharedCodec3229"]:c29(),["SharedCodec3230"]:c30(),["SharedCodec3231"]:c31(),["SharedCodec3232"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
