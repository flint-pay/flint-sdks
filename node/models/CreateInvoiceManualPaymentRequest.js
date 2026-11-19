import { d313 as c0 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d313 as d313 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoiceManualPaymentRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
