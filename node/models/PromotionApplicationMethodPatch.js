import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c1 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10441 as c2 } from '../descriptors/data/490.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10448 as c3, d10449 as c4, d10450 as c5, d10452 as c6, d10453 as c7, d10454 as c8, d10455 as c9, d10456 as c10, d10457 as c11, d10458 as c12, d10459 as c13, d10460 as c14, d10466 as c20, d10467 as c21, d10468 as c22, d10469 as c23 } from '../descriptors/data/491.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9696 as c15, d9697 as c16, d9698 as c17, d9699 as c18 } from '../descriptors/data/447.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9700 as c19 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10441 as d10441 } from '../descriptors/data/490.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2425"]:c6(),["SharedCodec2426"]:c7(),["SharedCodec2427"]:c8(),["SharedCodec2428"]:c9(),["SharedCodec2429"]:c10(),["SharedCodec2430"]:c11(),["SharedCodec2431"]:c12(),["SharedCodec2432"]:c13(),["SharedCodec2433"]:c14(),["SharedCodec2434"]:c15(),["SharedCodec2435"]:c16(),["SharedCodec2436"]:c17(),["SharedCodec2437"]:c18(),["SharedCodec2438"]:c19(),["SharedCodec2501"]:c20(),["SharedCodec2502"]:c21(),["SharedCodec2503"]:c22(),["SharedCodec2504"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
