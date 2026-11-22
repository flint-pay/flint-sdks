import { d9287 as c0, d9288 as c17, d9289 as c18 } from '../descriptors/data/421.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8336 as c2, d8337 as c3, d8338 as c4, d8339 as c5, d8340 as c6, d8341 as c7, d8342 as c8, d8343 as c9, d8344 as c10, d8345 as c11, d8346 as c12, d8347 as c13, d8348 as c14, d8349 as c15, d8350 as c16 } from '../descriptors/data/369.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7770 as c19 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7770 as d7770 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec120"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec1640"]:c6(),["SharedCodec1641"]:c7(),["SharedCodec1642"]:c8(),["SharedCodec1643"]:c9(),["SharedCodec1644"]:c10(),["SharedCodec1645"]:c11(),["SharedCodec1646"]:c12(),["SharedCodec1647"]:c13(),["SharedCodec1648"]:c14(),["SharedCodec1649"]:c15(),["SharedCodec1650"]:c16(),["SharedCodec3113"]:c17(),["SharedCodec3114"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
