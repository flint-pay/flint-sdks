import { d9287 as c0, d9293 as c2 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9407 as c1 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8351 as c4, d8352 as c5 } from '../descriptors/data/370.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9298 as c6, d9299 as c7, d9300 as c8, d9301 as c9, d9302 as c10, d9303 as c11, d9304 as c12 } from '../descriptors/data/423.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9287 as d9287 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1497"]:c4(),["SharedCodec1498"]:c5(),["SharedCodec1519"]:c6(),["SharedCodec1520"]:c7(),["SharedCodec1521"]:c8(),["SharedCodec1524"]:c9(),["SharedCodec1525"]:c10(),["SharedCodec1526"]:c11(),["SharedCodec1527"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
