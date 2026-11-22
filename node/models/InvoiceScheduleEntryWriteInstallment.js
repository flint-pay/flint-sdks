import { d9306 as c0, d9307 as c1 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1153 as c2 } from '../descriptors/data/58.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8379 as c4, d8380 as c5, d8381 as c6, d8382 as c7, d8383 as c8, d8384 as c9, d8385 as c10 } from '../descriptors/data/371.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9326 as c11, d9327 as c12, d9328 as c13, d9329 as c14, d9330 as c15, d9333 as c16, d9334 as c17 } from '../descriptors/data/423.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9336 as c18, d9338 as c19, d9339 as c20 } from '../descriptors/data/424.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1153 as d1153 } from '../descriptors/data/58.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec1671"]:c4(),["SharedCodec1672"]:c5(),["SharedCodec1673"]:c6(),["SharedCodec1674"]:c7(),["SharedCodec1675"]:c8(),["SharedCodec1676"]:c9(),["SharedCodec1677"]:c10(),["SharedCodec1692"]:c11(),["SharedCodec1693"]:c12(),["SharedCodec1694"]:c13(),["SharedCodec1695"]:c14(),["SharedCodec1696"]:c15(),["SharedCodec1703"]:c16(),["SharedCodec1704"]:c17(),["SharedCodec1706"]:c18(),["SharedCodec1708"]:c19(),["SharedCodec1709"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
