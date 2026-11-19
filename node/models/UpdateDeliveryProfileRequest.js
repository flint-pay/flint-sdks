import { d8719 as c0, d8722 as c1 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8036 as c2 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8132 as c3 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8468 as c4 } from '../descriptors/data/377.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8733 as c5, d8734 as c6, d8735 as c7, d8736 as c8, d8737 as c9, d8738 as c10, d8739 as c11, d8740 as c12, d8741 as c13, d8742 as c14, d8743 as c15, d8744 as c16 } from '../descriptors/data/391.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8745 as c17, d8746 as c18 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7737 as c19 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7737 as d7737 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3065"]:c2(),["SharedCodec3068"]:c3(),["SharedCodec3076"]:c4(),["SharedCodec968"]:c5(),["SharedCodec969"]:c6(),["SharedCodec970"]:c7(),["SharedCodec971"]:c8(),["SharedCodec972"]:c9(),["SharedCodec973"]:c10(),["SharedCodec974"]:c11(),["SharedCodec981"]:c12(),["SharedCodec982"]:c13(),["SharedCodec985"]:c14(),["SharedCodec986"]:c15(),["SharedCodec988"]:c16(),["SharedCodec989"]:c17(),["SharedCodec990"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
