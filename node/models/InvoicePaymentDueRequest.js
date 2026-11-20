import { d9292 as c0 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8354 as c1, d8355 as c2, d8357 as c3, d8359 as c4 } from '../descriptors/data/370.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9307 as c5, d9308 as c6, d9309 as c7, d9310 as c8, d9311 as c9, d9312 as c10, d9313 as c11 } from '../descriptors/data/423.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9292 as d9292 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1611"]:c1(),["SharedCodec1612"]:c2(),["SharedCodec1614"]:c3(),["SharedCodec1616"]:c4(),["SharedCodec1619"]:c5(),["SharedCodec1620"]:c6(),["SharedCodec1627"]:c7(),["SharedCodec1628"]:c8(),["SharedCodec1629"]:c9(),["SharedCodec1630"]:c10(),["SharedCodec1631"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
