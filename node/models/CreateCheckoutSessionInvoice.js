import { d8267 as c0, d8264 as c2, d8265 as c3, d8266 as c4 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d249 as c1 } from '../descriptors/data/11.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8111 as c5, d8112 as c6, d8113 as c7, d8114 as c8, d8115 as c9 } from '../descriptors/data/356.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d249 as d249 } from '../descriptors/data/11.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec350"]:c2(),["SharedCodec351"]:c3(),["SharedCodec352"]:c4(),["SharedCodec353"]:c5(),["SharedCodec354"]:c6(),["SharedCodec355"]:c7(),["SharedCodec356"]:c8(),["SharedCodec357"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
