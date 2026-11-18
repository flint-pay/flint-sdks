import { d366 as c0 } from '../descriptors/data/21.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c1 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c3 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10376 as c4, d10377 as c5, d10379 as c6, d10380 as c7, d10381 as c8, d10382 as c9, d10383 as c10, d10384 as c11, d10385 as c12, d10386 as c13, d10389 as c14, d10390 as c15, d10391 as c16, d10392 as c17, d10393 as c18, d10396 as c24, d10397 as c25, d10398 as c26 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9639 as c19, d9640 as c20, d9641 as c21 } from '../descriptors/data/439.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9642 as c22, d9643 as c23 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10401 as c27, d10402 as c28, d10403 as c29, d10404 as c30 } from '../descriptors/data/483.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d366 as d366 } from '../descriptors/data/21.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2421"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2429"]:c16(),["SharedCodec2430"]:c17(),["SharedCodec2431"]:c18(),["SharedCodec2434"]:c19(),["SharedCodec2435"]:c20(),["SharedCodec2436"]:c21(),["SharedCodec2437"]:c22(),["SharedCodec2438"]:c23(),["SharedCodec2440"]:c24(),["SharedCodec2441"]:c25(),["SharedCodec2442"]:c26(),["SharedCodec2501"]:c27(),["SharedCodec2502"]:c28(),["SharedCodec2503"]:c29(),["SharedCodec2504"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
