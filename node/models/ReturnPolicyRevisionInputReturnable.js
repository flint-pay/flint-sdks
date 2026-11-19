import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1824 as c1 } from '../descriptors/data/91.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10555 as c2, d10557 as c3, d10559 as c4, d10561 as c5, d10566 as c6, d10567 as c7, d10568 as c8, d10569 as c9, d10570 as c10, d10571 as c11, d10572 as c12 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10575 as c13, d10576 as c14, d10577 as c15, d10578 as c16 } from '../descriptors/data/501.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1824 as d1824 } from '../descriptors/data/91.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2729"]:c6(),["SharedCodec2730"]:c7(),["SharedCodec2731"]:c8(),["SharedCodec2732"]:c9(),["SharedCodec2733"]:c10(),["SharedCodec2734"]:c11(),["SharedCodec2735"]:c12(),["SharedCodec2738"]:c13(),["SharedCodec2739"]:c14(),["SharedCodec2740"]:c15(),["SharedCodec2741"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
