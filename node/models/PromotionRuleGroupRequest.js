import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10448 as c1, d10449 as c2, d10450 as c3, d10454 as c4, d10455 as c5, d10456 as c6, d10457 as c7, d10458 as c8, d10466 as c9, d10467 as c10, d10468 as c11, d10469 as c12 } from '../descriptors/data/491.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10448 as d10448 } from '../descriptors/data/491.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2427"]:c4(),["SharedCodec2428"]:c5(),["SharedCodec2429"]:c6(),["SharedCodec2430"]:c7(),["SharedCodec2431"]:c8(),["SharedCodec2501"]:c9(),["SharedCodec2502"]:c10(),["SharedCodec2503"]:c11(),["SharedCodec2504"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
