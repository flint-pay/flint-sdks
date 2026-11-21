import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1651 as c1 } from '../descriptors/data/82.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10447 as c2 } from '../descriptors/data/490.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10448 as c3, d10449 as c4, d10450 as c5, d10454 as c6, d10455 as c7, d10456 as c8, d10457 as c9, d10458 as c10, d10466 as c16, d10467 as c17, d10468 as c18, d10469 as c19 } from '../descriptors/data/491.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9696 as c11, d9697 as c12, d9698 as c13, d9699 as c14 } from '../descriptors/data/447.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9700 as c15 } from '../descriptors/data/448.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1651 as d1651 } from '../descriptors/data/82.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1651;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2427"]:c6(),["SharedCodec2428"]:c7(),["SharedCodec2429"]:c8(),["SharedCodec2430"]:c9(),["SharedCodec2431"]:c10(),["SharedCodec2434"]:c11(),["SharedCodec2435"]:c12(),["SharedCodec2436"]:c13(),["SharedCodec2437"]:c14(),["SharedCodec2438"]:c15(),["SharedCodec2501"]:c16(),["SharedCodec2502"]:c17(),["SharedCodec2503"]:c18(),["SharedCodec2504"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
