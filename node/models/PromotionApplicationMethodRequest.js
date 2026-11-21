import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c1 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10442 as c2, d10447 as c3 } from '../descriptors/data/490.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10448 as c4, d10449 as c5, d10450 as c6, d10454 as c8, d10455 as c9, d10456 as c10, d10457 as c11, d10458 as c12, d10461 as c18, d10462 as c19, d10463 as c20, d10466 as c21, d10467 as c22, d10468 as c23, d10469 as c24 } from '../descriptors/data/491.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10278 as c7 } from '../descriptors/data/481.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9696 as c13, d9697 as c14, d9698 as c15, d9699 as c16 } from '../descriptors/data/447.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9700 as c17 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10442 as d10442 } from '../descriptors/data/490.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2421"]:c7(),["SharedCodec2427"]:c8(),["SharedCodec2428"]:c9(),["SharedCodec2429"]:c10(),["SharedCodec2430"]:c11(),["SharedCodec2431"]:c12(),["SharedCodec2434"]:c13(),["SharedCodec2435"]:c14(),["SharedCodec2436"]:c15(),["SharedCodec2437"]:c16(),["SharedCodec2438"]:c17(),["SharedCodec2440"]:c18(),["SharedCodec2441"]:c19(),["SharedCodec2442"]:c20(),["SharedCodec2501"]:c21(),["SharedCodec2502"]:c22(),["SharedCodec2503"]:c23(),["SharedCodec2504"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
