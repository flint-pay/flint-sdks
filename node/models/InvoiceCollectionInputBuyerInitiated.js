import { d1024 as c0 } from '../descriptors/data/53.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9419 as c1 } from '../descriptors/data/427.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9305 as c2 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9311 as c4 } from '../descriptors/data/423.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1024 as d1024 } from '../descriptors/data/53.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1024;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputBuyerInitiated"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1525"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputBuyerInitiated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
