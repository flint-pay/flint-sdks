import { d314 as c0 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9238 as c1, d9240 as c2 } from '../descriptors/data/415.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8292 as c4, d8293 as c5, d8294 as c6, d8295 as c7, d8296 as c8, d8297 as c9, d8298 as c10, d8299 as c11, d8300 as c12, d8301 as c13, d8302 as c14, d8303 as c15, d8304 as c16, d8305 as c17, d8306 as c18 } from '../descriptors/data/363.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d314 as d314 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec119"]:c4(),["SharedCodec120"]:c5(),["SharedCodec121"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1634"]:c8(),["SharedCodec1635"]:c9(),["SharedCodec1636"]:c10(),["SharedCodec1637"]:c11(),["SharedCodec1638"]:c12(),["SharedCodec1639"]:c13(),["SharedCodec1640"]:c14(),["SharedCodec1641"]:c15(),["SharedCodec1642"]:c16(),["SharedCodec1643"]:c17(),["SharedCodec1644"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
