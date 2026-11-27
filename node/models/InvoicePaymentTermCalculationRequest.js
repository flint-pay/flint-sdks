import { d9367 as c0 } from '../descriptors/data/426.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8420 as c1, d8421 as c2, d8422 as c3, d8423 as c4, d8424 as c5, d8425 as c6, d8426 as c7, d8427 as c8, d8428 as c9, d8429 as c10, d8430 as c11 } from '../descriptors/data/374.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9367 as d9367 } from '../descriptors/data/426.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1665"]:c1(),["SharedCodec1666"]:c2(),["SharedCodec1667"]:c3(),["SharedCodec1668"]:c4(),["SharedCodec1669"]:c5(),["SharedCodec1670"]:c6(),["SharedCodec1671"]:c7(),["SharedCodec1672"]:c8(),["SharedCodec1673"]:c9(),["SharedCodec1674"]:c10(),["SharedCodec1675"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
