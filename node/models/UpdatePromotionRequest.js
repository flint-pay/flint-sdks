import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c1 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10375 as c2, d10378 as c3, d10382 as c4, d10383 as c5, d10384 as c6, d10387 as c7, d10388 as c8, d10389 as c9, d10390 as c10, d10391 as c11, d10392 as c12, d10393 as c13, d10394 as c14, d10395 as c15 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9639 as c16, d9640 as c17, d9641 as c18 } from '../descriptors/data/439.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9642 as c19, d9643 as c20 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10401 as c21, d10402 as c22, d10403 as c23, d10404 as c24, d10405 as c27, d10406 as c28, d10407 as c29, d10408 as c30, d10409 as c31, d10410 as c32 } from '../descriptors/data/483.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8015 as c25 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8111 as c26 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7777 as c33 } from '../descriptors/data/327.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7777 as d7777 } from '../descriptors/data/327.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2434"]:c16(),["SharedCodec2435"]:c17(),["SharedCodec2436"]:c18(),["SharedCodec2437"]:c19(),["SharedCodec2438"]:c20(),["SharedCodec2501"]:c21(),["SharedCodec2502"]:c22(),["SharedCodec2503"]:c23(),["SharedCodec2504"]:c24(),["SharedCodec3072"]:c25(),["SharedCodec3075"]:c26(),["SharedCodec3163"]:c27(),["SharedCodec3164"]:c28(),["SharedCodec3165"]:c29(),["SharedCodec3166"]:c30(),["SharedCodec3167"]:c31(),["SharedCodec3168"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
