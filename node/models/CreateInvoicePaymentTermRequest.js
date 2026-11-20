import { d316 as c0 } from '../descriptors/data/16.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9273 as c1, d9275 as c2 } from '../descriptors/data/421.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8326 as c4, d8327 as c5, d8328 as c6, d8329 as c7, d8330 as c8, d8331 as c9 } from '../descriptors/data/368.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8332 as c10, d8333 as c11, d8334 as c12, d8335 as c13, d8336 as c14, d8337 as c15, d8338 as c16, d8339 as c17, d8340 as c18 } from '../descriptors/data/369.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d316 as d316 } from '../descriptors/data/16.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec119"]:c4(),["SharedCodec120"]:c5(),["SharedCodec121"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1635"]:c8(),["SharedCodec1636"]:c9(),["SharedCodec1637"]:c10(),["SharedCodec1638"]:c11(),["SharedCodec1639"]:c12(),["SharedCodec1640"]:c13(),["SharedCodec1641"]:c14(),["SharedCodec1642"]:c15(),["SharedCodec1643"]:c16(),["SharedCodec1644"]:c17(),["SharedCodec1645"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
