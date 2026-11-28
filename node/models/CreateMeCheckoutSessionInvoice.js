import { d8347 as c0, d8344 as c2, d8345 as c3, d8346 as c4 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d325 as c1 } from '../descriptors/data/17.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9709 as c5 } from '../descriptors/data/448.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d325 as d325 } from '../descriptors/data/17.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionInvoice"]:c1(),["SharedCodec355"]:c2(),["SharedCodec356"]:c3(),["SharedCodec357"]:c4(),["SharedCodec475"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
