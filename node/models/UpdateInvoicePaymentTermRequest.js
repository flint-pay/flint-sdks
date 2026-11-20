import { d9275 as c0, d9276 as c17, d9277 as c18 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c1 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8326 as c2, d8327 as c3, d8328 as c4, d8329 as c5, d8330 as c6, d8331 as c7 } from '../descriptors/data/368.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8332 as c8, d8333 as c9, d8334 as c10, d8335 as c11, d8336 as c12, d8337 as c13, d8338 as c14, d8339 as c15, d8340 as c16 } from '../descriptors/data/369.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7761 as c19 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7761 as d7761 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec1635"]:c6(),["SharedCodec1636"]:c7(),["SharedCodec1637"]:c8(),["SharedCodec1638"]:c9(),["SharedCodec1639"]:c10(),["SharedCodec1640"]:c11(),["SharedCodec1641"]:c12(),["SharedCodec1642"]:c13(),["SharedCodec1643"]:c14(),["SharedCodec1644"]:c15(),["SharedCodec1645"]:c16(),["SharedCodec3105"]:c17(),["SharedCodec3106"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
