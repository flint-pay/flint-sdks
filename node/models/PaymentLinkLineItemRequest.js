import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8235 as c1 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10148 as c2 } from '../descriptors/data/469.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c3 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10174 as c4, d10179 as c5, d10180 as c6 } from '../descriptors/data/471.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10182 as c7, d10183 as c8, d10184 as c9, d10185 as c10, d10186 as c11 } from '../descriptors/data/472.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10191 as c12, d10192 as c13, d10193 as c14, d10194 as c15 } from '../descriptors/data/473.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10148 as d10148 } from '../descriptors/data/469.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2148"]:c4(),["SharedCodec2153"]:c5(),["SharedCodec2154"]:c6(),["SharedCodec2156"]:c7(),["SharedCodec2172"]:c8(),["SharedCodec2173"]:c9(),["SharedCodec2174"]:c10(),["SharedCodec2175"]:c11(),["SharedCodec2182"]:c12(),["SharedCodec2183"]:c13(),["SharedCodec2184"]:c14(),["SharedCodec2185"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
