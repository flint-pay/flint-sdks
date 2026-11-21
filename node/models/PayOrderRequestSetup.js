import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1443 as c1 } from '../descriptors/data/71.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9931 as c2 } from '../descriptors/data/460.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9944 as c3, d9945 as c4, d9946 as c5 } from '../descriptors/data/461.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9961 as c6, d9962 as c7 } from '../descriptors/data/462.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1443 as d1443 } from '../descriptors/data/71.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestSetup"]:c1(),["PaymentSourceCredentialStripePaymentMethod"]:c2(),["SharedCodec2273"]:c3(),["SharedCodec2274"]:c4(),["SharedCodec2275"]:c5(),["SharedCodec2290"]:c6(),["SharedCodec2291"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
