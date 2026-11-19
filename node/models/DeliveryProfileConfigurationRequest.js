import { d8719 as c0, d8722 as c1 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8733 as c2, d8734 as c3, d8735 as c4, d8736 as c5, d8737 as c6, d8738 as c7, d8739 as c8, d8740 as c9, d8741 as c10, d8742 as c11, d8743 as c12, d8744 as c13 } from '../descriptors/data/391.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8745 as c14, d8746 as c15 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8719 as d8719 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3(),["SharedCodec970"]:c4(),["SharedCodec971"]:c5(),["SharedCodec972"]:c6(),["SharedCodec973"]:c7(),["SharedCodec974"]:c8(),["SharedCodec981"]:c9(),["SharedCodec982"]:c10(),["SharedCodec985"]:c11(),["SharedCodec986"]:c12(),["SharedCodec988"]:c13(),["SharedCodec989"]:c14(),["SharedCodec990"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
