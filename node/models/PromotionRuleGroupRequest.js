import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10382 as c1, d10383 as c2, d10384 as c3, d10389 as c4, d10390 as c5, d10391 as c6, d10392 as c7, d10393 as c8 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10401 as c9, d10402 as c10, d10403 as c11, d10404 as c12 } from '../descriptors/data/483.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10382 as d10382 } from '../descriptors/data/482.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2427"]:c4(),["SharedCodec2428"]:c5(),["SharedCodec2429"]:c6(),["SharedCodec2430"]:c7(),["SharedCodec2431"]:c8(),["SharedCodec2501"]:c9(),["SharedCodec2502"]:c10(),["SharedCodec2503"]:c11(),["SharedCodec2504"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
