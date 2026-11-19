import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10553 as c1 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10555 as c2, d10557 as c3, d10559 as c4, d10561 as c5, d10564 as c6, d10565 as c7, d10566 as c8, d10567 as c9, d10568 as c10, d10569 as c11, d10570 as c12, d10571 as c13, d10572 as c14, d10573 as c15 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10574 as c16, d10575 as c17, d10576 as c18, d10577 as c19, d10578 as c20 } from '../descriptors/data/501.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10553 as d10553 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2727"]:c6(),["SharedCodec2728"]:c7(),["SharedCodec2729"]:c8(),["SharedCodec2730"]:c9(),["SharedCodec2731"]:c10(),["SharedCodec2732"]:c11(),["SharedCodec2733"]:c12(),["SharedCodec2734"]:c13(),["SharedCodec2735"]:c14(),["SharedCodec2736"]:c15(),["SharedCodec2737"]:c16(),["SharedCodec2738"]:c17(),["SharedCodec2739"]:c18(),["SharedCodec2740"]:c19(),["SharedCodec2741"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
