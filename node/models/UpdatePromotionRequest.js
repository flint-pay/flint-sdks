import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8272 as c1 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10441 as c2, d10444 as c3 } from '../descriptors/data/490.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10448 as c4, d10449 as c5, d10450 as c6, d10452 as c7, d10453 as c8, d10454 as c9, d10455 as c10, d10456 as c11, d10457 as c12, d10458 as c13, d10459 as c14, d10460 as c15, d10466 as c21, d10467 as c22, d10468 as c23, d10469 as c24, d10470 as c27, d10471 as c28, d10472 as c29 } from '../descriptors/data/491.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9696 as c16, d9697 as c17, d9698 as c18, d9699 as c19 } from '../descriptors/data/447.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9700 as c20 } from '../descriptors/data/448.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8057 as c25 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8155 as c26 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10473 as c30, d10474 as c31, d10475 as c32 } from '../descriptors/data/492.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7798 as c33 } from '../descriptors/data/329.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7798 as d7798 } from '../descriptors/data/329.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7798;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2434"]:c16(),["SharedCodec2435"]:c17(),["SharedCodec2436"]:c18(),["SharedCodec2437"]:c19(),["SharedCodec2438"]:c20(),["SharedCodec2501"]:c21(),["SharedCodec2502"]:c22(),["SharedCodec2503"]:c23(),["SharedCodec2504"]:c24(),["SharedCodec3081"]:c25(),["SharedCodec3084"]:c26(),["SharedCodec3179"]:c27(),["SharedCodec3180"]:c28(),["SharedCodec3181"]:c29(),["SharedCodec3182"]:c30(),["SharedCodec3183"]:c31(),["SharedCodec3184"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
