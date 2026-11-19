import { d8698 as c0 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8701 as c1, d8712 as c5, d8713 as c6, d8714 as c7, d8715 as c8, d8716 as c9, d8717 as c10, d8718 as c11, d8719 as c12, d8720 as c13 } from '../descriptors/data/385.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8015 as c2 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8111 as c3 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8447 as c4 } from '../descriptors/data/371.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8721 as c14, d8722 as c15, d8723 as c16, d8724 as c17, d8725 as c18 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7736 as c19 } from '../descriptors/data/325.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7736 as d7736 } from '../descriptors/data/325.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3072"]:c2(),["SharedCodec3075"]:c3(),["SharedCodec3083"]:c4(),["SharedCodec968"]:c5(),["SharedCodec969"]:c6(),["SharedCodec970"]:c7(),["SharedCodec971"]:c8(),["SharedCodec972"]:c9(),["SharedCodec973"]:c10(),["SharedCodec974"]:c11(),["SharedCodec981"]:c12(),["SharedCodec982"]:c13(),["SharedCodec985"]:c14(),["SharedCodec986"]:c15(),["SharedCodec988"]:c16(),["SharedCodec989"]:c17(),["SharedCodec990"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
