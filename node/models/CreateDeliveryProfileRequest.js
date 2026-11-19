import { d272 as c0 } from '../descriptors/data/13.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8719 as c1, d8722 as c2 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c3 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8733 as c4, d8734 as c5, d8735 as c6, d8736 as c7, d8737 as c8, d8738 as c9, d8739 as c10, d8740 as c11, d8741 as c12, d8742 as c13, d8743 as c14, d8744 as c15 } from '../descriptors/data/391.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8745 as c16, d8746 as c17 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d272 as d272 } from '../descriptors/data/13.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec968"]:c4(),["SharedCodec969"]:c5(),["SharedCodec970"]:c6(),["SharedCodec971"]:c7(),["SharedCodec972"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["SharedCodec981"]:c11(),["SharedCodec982"]:c12(),["SharedCodec985"]:c13(),["SharedCodec986"]:c14(),["SharedCodec988"]:c15(),["SharedCodec989"]:c16(),["SharedCodec990"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
