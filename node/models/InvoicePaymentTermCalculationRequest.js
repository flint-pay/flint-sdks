import { d9367 as c0 } from '../descriptors/data/425.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8420 as c1, d8421 as c2, d8422 as c3, d8423 as c4, d8424 as c5, d8425 as c6, d8426 as c7, d8427 as c8, d8428 as c9, d8429 as c10, d8430 as c11 } from '../descriptors/data/373.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9367 as d9367 } from '../descriptors/data/425.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1665"]:c1(),["SharedCodec1666"]:c2(),["SharedCodec1667"]:c3(),["SharedCodec1668"]:c4(),["SharedCodec1669"]:c5(),["SharedCodec1670"]:c6(),["SharedCodec1671"]:c7(),["SharedCodec1672"]:c8(),["SharedCodec1673"]:c9(),["SharedCodec1674"]:c10(),["SharedCodec1675"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
