import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1652 as c1 } from '../descriptors/data/83.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10381 as c2, d10382 as c3, d10383 as c4, d10384 as c5, d10389 as c6, d10390 as c7, d10391 as c8, d10392 as c9, d10393 as c10 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9639 as c11, d9640 as c12, d9641 as c13 } from '../descriptors/data/439.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9642 as c14, d9643 as c15 } from '../descriptors/data/440.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10401 as c16, d10402 as c17, d10403 as c18, d10404 as c19 } from '../descriptors/data/483.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1652 as d1652 } from '../descriptors/data/83.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1652;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2427"]:c6(),["SharedCodec2428"]:c7(),["SharedCodec2429"]:c8(),["SharedCodec2430"]:c9(),["SharedCodec2431"]:c10(),["SharedCodec2434"]:c11(),["SharedCodec2435"]:c12(),["SharedCodec2436"]:c13(),["SharedCodec2437"]:c14(),["SharedCodec2438"]:c15(),["SharedCodec2501"]:c16(),["SharedCodec2502"]:c17(),["SharedCodec2503"]:c18(),["SharedCodec2504"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
