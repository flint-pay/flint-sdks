import { d638 as c0 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8701 as c1, d8712 as c2, d8713 as c3 } from '../descriptors/data/385.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8721 as c4, d8722 as c5, d8723 as c6, d8724 as c7, d8725 as c8 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d638 as d638 } from '../descriptors/data/36.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d638;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3(),["SharedCodec985"]:c4(),["SharedCodec986"]:c5(),["SharedCodec988"]:c6(),["SharedCodec989"]:c7(),["SharedCodec990"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
