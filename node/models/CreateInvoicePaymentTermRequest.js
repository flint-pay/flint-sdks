import { d317 as c0 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9365 as c1, d9367 as c2 } from '../descriptors/data/425.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8416 as c4, d8417 as c5, d8418 as c6, d8419 as c7, d8420 as c8, d8421 as c9, d8422 as c10, d8423 as c11, d8424 as c12, d8425 as c13, d8426 as c14, d8427 as c15, d8428 as c16, d8429 as c17, d8430 as c18 } from '../descriptors/data/373.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d317 as d317 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec1665"]:c8(),["SharedCodec1666"]:c9(),["SharedCodec1667"]:c10(),["SharedCodec1668"]:c11(),["SharedCodec1669"]:c12(),["SharedCodec1670"]:c13(),["SharedCodec1671"]:c14(),["SharedCodec1672"]:c15(),["SharedCodec1673"]:c16(),["SharedCodec1674"]:c17(),["SharedCodec1675"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
