import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c1 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1646 as c2 } from '../descriptors/data/82.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10381 as c3, d10382 as c4, d10383 as c5, d10384 as c6, d10386 as c7, d10389 as c8, d10390 as c9, d10391 as c10, d10392 as c11, d10393 as c12 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9639 as c13, d9640 as c14, d9641 as c15 } from '../descriptors/data/439.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9642 as c16, d9643 as c17 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10401 as c18, d10402 as c19, d10403 as c20, d10404 as c21 } from '../descriptors/data/483.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1646 as d1646 } from '../descriptors/data/82.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1646;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionAmountOffMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2421"]:c7(),["SharedCodec2427"]:c8(),["SharedCodec2428"]:c9(),["SharedCodec2429"]:c10(),["SharedCodec2430"]:c11(),["SharedCodec2431"]:c12(),["SharedCodec2434"]:c13(),["SharedCodec2435"]:c14(),["SharedCodec2436"]:c15(),["SharedCodec2437"]:c16(),["SharedCodec2438"]:c17(),["SharedCodec2501"]:c18(),["SharedCodec2502"]:c19(),["SharedCodec2503"]:c20(),["SharedCodec2504"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
