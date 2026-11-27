import { d9379 as c0, d9385 as c2 } from '../descriptors/data/427.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9502 as c1 } from '../descriptors/data/433.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c3 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8441 as c4, d8442 as c5 } from '../descriptors/data/375.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9390 as c6, d9391 as c7, d9392 as c8, d9393 as c9, d9394 as c10, d9395 as c11, d9396 as c12 } from '../descriptors/data/428.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9379 as d9379 } from '../descriptors/data/427.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1527"]:c4(),["SharedCodec1528"]:c5(),["SharedCodec1549"]:c6(),["SharedCodec1550"]:c7(),["SharedCodec1551"]:c8(),["SharedCodec1554"]:c9(),["SharedCodec1555"]:c10(),["SharedCodec1556"]:c11(),["SharedCodec1557"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
