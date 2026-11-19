import { d9259 as c0 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9278 as c1, d9279 as c2, d9280 as c3, d9281 as c4, d9282 as c5 } from '../descriptors/data/417.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9259 as d9259 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1686"]:c1(),["SharedCodec1687"]:c2(),["SharedCodec1688"]:c3(),["SharedCodec1689"]:c4(),["SharedCodec1690"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
