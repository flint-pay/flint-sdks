import { d9306 as c0 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8379 as c2, d8380 as c3, d8381 as c4, d8382 as c5, d8383 as c6, d8384 as c7, d8385 as c8 } from '../descriptors/data/371.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9306 as d9306 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1671"]:c2(),["SharedCodec1672"]:c3(),["SharedCodec1673"]:c4(),["SharedCodec1674"]:c5(),["SharedCodec1675"]:c6(),["SharedCodec1676"]:c7(),["SharedCodec1677"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
