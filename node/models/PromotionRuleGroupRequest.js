import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10448 as c1, d10449 as c2, d10450 as c3, d10454 as c4, d10455 as c5, d10456 as c6, d10457 as c7, d10458 as c8, d10466 as c9, d10467 as c10, d10468 as c11, d10469 as c12 } from '../descriptors/data/491.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10448 as d10448 } from '../descriptors/data/491.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2427"]:c4(),["SharedCodec2428"]:c5(),["SharedCodec2429"]:c6(),["SharedCodec2430"]:c7(),["SharedCodec2431"]:c8(),["SharedCodec2501"]:c9(),["SharedCodec2502"]:c10(),["SharedCodec2503"]:c11(),["SharedCodec2504"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
