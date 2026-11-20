import { d9275 as c0 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8330 as c1, d8331 as c2 } from '../descriptors/data/368.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8332 as c3, d8333 as c4, d8334 as c5, d8335 as c6, d8336 as c7, d8337 as c8, d8338 as c9, d8339 as c10, d8340 as c11 } from '../descriptors/data/369.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9275 as d9275 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1635"]:c1(),["SharedCodec1636"]:c2(),["SharedCodec1637"]:c3(),["SharedCodec1638"]:c4(),["SharedCodec1639"]:c5(),["SharedCodec1640"]:c6(),["SharedCodec1641"]:c7(),["SharedCodec1642"]:c8(),["SharedCodec1643"]:c9(),["SharedCodec1644"]:c10(),["SharedCodec1645"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
