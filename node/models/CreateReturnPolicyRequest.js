import { d380 as c0 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c1 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10553 as c3 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10555 as c4, d10557 as c5, d10559 as c6, d10561 as c7, d10564 as c8, d10565 as c9, d10566 as c10, d10567 as c11, d10568 as c12, d10569 as c13, d10570 as c14, d10571 as c15, d10572 as c16, d10573 as c17 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10574 as c18, d10575 as c19, d10576 as c20, d10577 as c21, d10578 as c22 } from '../descriptors/data/501.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d380 as d380 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2727"]:c8(),["SharedCodec2728"]:c9(),["SharedCodec2729"]:c10(),["SharedCodec2730"]:c11(),["SharedCodec2731"]:c12(),["SharedCodec2732"]:c13(),["SharedCodec2733"]:c14(),["SharedCodec2734"]:c15(),["SharedCodec2735"]:c16(),["SharedCodec2736"]:c17(),["SharedCodec2737"]:c18(),["SharedCodec2738"]:c19(),["SharedCodec2739"]:c20(),["SharedCodec2740"]:c21(),["SharedCodec2741"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
