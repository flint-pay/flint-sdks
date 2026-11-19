import { d9256 as c0 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8320 as c1, d8321 as c2, d8323 as c3, d8325 as c4 } from '../descriptors/data/364.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9271 as c5, d9272 as c6, d9273 as c7, d9274 as c8, d9275 as c9, d9276 as c10, d9277 as c11 } from '../descriptors/data/417.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9256 as d9256 } from '../descriptors/data/416.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1610"]:c1(),["SharedCodec1611"]:c2(),["SharedCodec1613"]:c3(),["SharedCodec1615"]:c4(),["SharedCodec1618"]:c5(),["SharedCodec1619"]:c6(),["SharedCodec1626"]:c7(),["SharedCodec1627"]:c8(),["SharedCodec1628"]:c9(),["SharedCodec1629"]:c10(),["SharedCodec1630"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
