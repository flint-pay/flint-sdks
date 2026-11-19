import { d272 as c0 } from '../descriptors/data/13.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8698 as c1 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8701 as c2, d8712 as c4, d8713 as c5, d8714 as c6, d8715 as c7, d8716 as c8, d8717 as c9, d8718 as c10, d8719 as c11, d8720 as c12 } from '../descriptors/data/385.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8721 as c13, d8722 as c14, d8723 as c15, d8724 as c16, d8725 as c17 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d272 as d272 } from '../descriptors/data/13.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec968"]:c4(),["SharedCodec969"]:c5(),["SharedCodec970"]:c6(),["SharedCodec971"]:c7(),["SharedCodec972"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["SharedCodec981"]:c11(),["SharedCodec982"]:c12(),["SharedCodec985"]:c13(),["SharedCodec986"]:c14(),["SharedCodec988"]:c15(),["SharedCodec989"]:c16(),["SharedCodec990"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
