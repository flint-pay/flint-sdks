import { d9240 as c0, d9241 as c17, d9242 as c18 } from '../descriptors/data/415.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8292 as c2, d8293 as c3, d8294 as c4, d8295 as c5, d8296 as c6, d8297 as c7, d8298 as c8, d8299 as c9, d8300 as c10, d8301 as c11, d8302 as c12, d8303 as c13, d8304 as c14, d8305 as c15, d8306 as c16 } from '../descriptors/data/363.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7749 as c19 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7749 as d7749 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec1634"]:c6(),["SharedCodec1635"]:c7(),["SharedCodec1636"]:c8(),["SharedCodec1637"]:c9(),["SharedCodec1638"]:c10(),["SharedCodec1639"]:c11(),["SharedCodec1640"]:c12(),["SharedCodec1641"]:c13(),["SharedCodec1642"]:c14(),["SharedCodec1643"]:c15(),["SharedCodec1644"]:c16(),["SharedCodec3104"]:c17(),["SharedCodec3105"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
