import { d368 as c0 } from '../descriptors/data/21.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8272 as c3 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10442 as c4, d10443 as c5, d10445 as c6, d10446 as c7, d10447 as c8 } from '../descriptors/data/490.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10448 as c9, d10449 as c10, d10450 as c11, d10451 as c12, d10454 as c14, d10455 as c15, d10456 as c16, d10457 as c17, d10458 as c18, d10461 as c24, d10462 as c25, d10463 as c26, d10466 as c27, d10467 as c28, d10468 as c29, d10469 as c30 } from '../descriptors/data/491.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10278 as c13 } from '../descriptors/data/481.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9696 as c19, d9697 as c20, d9698 as c21, d9699 as c22 } from '../descriptors/data/447.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9700 as c23 } from '../descriptors/data/448.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d368 as d368 } from '../descriptors/data/21.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2421"]:c13(),["SharedCodec2427"]:c14(),["SharedCodec2428"]:c15(),["SharedCodec2429"]:c16(),["SharedCodec2430"]:c17(),["SharedCodec2431"]:c18(),["SharedCodec2434"]:c19(),["SharedCodec2435"]:c20(),["SharedCodec2436"]:c21(),["SharedCodec2437"]:c22(),["SharedCodec2438"]:c23(),["SharedCodec2440"]:c24(),["SharedCodec2441"]:c25(),["SharedCodec2442"]:c26(),["SharedCodec2501"]:c27(),["SharedCodec2502"]:c28(),["SharedCodec2503"]:c29(),["SharedCodec2504"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
