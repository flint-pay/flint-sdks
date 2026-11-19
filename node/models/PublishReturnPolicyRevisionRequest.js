import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1689 as c1 } from '../descriptors/data/83.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10553 as c2 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10555 as c3, d10557 as c4, d10559 as c5, d10561 as c6, d10564 as c7, d10565 as c8, d10566 as c9, d10567 as c10, d10568 as c11, d10569 as c12, d10570 as c13, d10571 as c14, d10572 as c15, d10573 as c16 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10574 as c17, d10575 as c18, d10576 as c19, d10577 as c20, d10578 as c21 } from '../descriptors/data/501.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1689 as d1689 } from '../descriptors/data/83.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2727"]:c7(),["SharedCodec2728"]:c8(),["SharedCodec2729"]:c9(),["SharedCodec2730"]:c10(),["SharedCodec2731"]:c11(),["SharedCodec2732"]:c12(),["SharedCodec2733"]:c13(),["SharedCodec2734"]:c14(),["SharedCodec2735"]:c15(),["SharedCodec2736"]:c16(),["SharedCodec2737"]:c17(),["SharedCodec2738"]:c18(),["SharedCodec2739"]:c19(),["SharedCodec2740"]:c20(),["SharedCodec2741"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
