import { d641 as c0 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8701 as c1, d8712 as c2, d8713 as c3, d8716 as c4, d8717 as c5, d8718 as c6 } from '../descriptors/data/385.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8721 as c7, d8722 as c8, d8723 as c9, d8724 as c10, d8725 as c11 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d641 as d641 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d641;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3(),["SharedCodec972"]:c4(),["SharedCodec973"]:c5(),["SharedCodec974"]:c6(),["SharedCodec985"]:c7(),["SharedCodec986"]:c8(),["SharedCodec988"]:c9(),["SharedCodec989"]:c10(),["SharedCodec990"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
