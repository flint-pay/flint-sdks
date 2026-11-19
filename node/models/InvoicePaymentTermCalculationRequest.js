import { d9240 as c0 } from '../descriptors/data/415.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8296 as c1, d8297 as c2, d8298 as c3, d8299 as c4, d8300 as c5, d8301 as c6, d8302 as c7, d8303 as c8, d8304 as c9, d8305 as c10, d8306 as c11 } from '../descriptors/data/363.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9240 as d9240 } from '../descriptors/data/415.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1634"]:c1(),["SharedCodec1635"]:c2(),["SharedCodec1636"]:c3(),["SharedCodec1637"]:c4(),["SharedCodec1638"]:c5(),["SharedCodec1639"]:c6(),["SharedCodec1640"]:c7(),["SharedCodec1641"]:c8(),["SharedCodec1642"]:c9(),["SharedCodec1643"]:c10(),["SharedCodec1644"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
