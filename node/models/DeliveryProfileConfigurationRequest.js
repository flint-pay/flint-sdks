import { d8698 as c0 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8701 as c1, d8712 as c2, d8713 as c3, d8714 as c4, d8715 as c5, d8716 as c6, d8717 as c7, d8718 as c8, d8719 as c9, d8720 as c10 } from '../descriptors/data/385.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8721 as c11, d8722 as c12, d8723 as c13, d8724 as c14, d8725 as c15 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8698 as d8698 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3(),["SharedCodec970"]:c4(),["SharedCodec971"]:c5(),["SharedCodec972"]:c6(),["SharedCodec973"]:c7(),["SharedCodec974"]:c8(),["SharedCodec981"]:c9(),["SharedCodec982"]:c10(),["SharedCodec985"]:c11(),["SharedCodec986"]:c12(),["SharedCodec988"]:c13(),["SharedCodec989"]:c14(),["SharedCodec990"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
