import { d9251 as c0, d9257 as c2, d9262 as c6, d9263 as c7, d9264 as c8, d9265 as c9, d9266 as c10 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9364 as c1 } from '../descriptors/data/421.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8317 as c4, d8318 as c5 } from '../descriptors/data/364.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9267 as c11, d9268 as c12 } from '../descriptors/data/417.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9251 as d9251 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1496"]:c4(),["SharedCodec1497"]:c5(),["SharedCodec1518"]:c6(),["SharedCodec1519"]:c7(),["SharedCodec1520"]:c8(),["SharedCodec1523"]:c9(),["SharedCodec1524"]:c10(),["SharedCodec1525"]:c11(),["SharedCodec1526"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
