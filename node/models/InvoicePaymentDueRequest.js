import { d9304 as c0 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8364 as c1, d8365 as c2, d8367 as c3, d8369 as c4 } from '../descriptors/data/370.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9319 as c5, d9320 as c6, d9321 as c7, d9322 as c8, d9323 as c9, d9324 as c10, d9325 as c11 } from '../descriptors/data/423.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9304 as d9304 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1616"]:c1(),["SharedCodec1617"]:c2(),["SharedCodec1619"]:c3(),["SharedCodec1621"]:c4(),["SharedCodec1624"]:c5(),["SharedCodec1625"]:c6(),["SharedCodec1632"]:c7(),["SharedCodec1633"]:c8(),["SharedCodec1634"]:c9(),["SharedCodec1635"]:c10(),["SharedCodec1636"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
