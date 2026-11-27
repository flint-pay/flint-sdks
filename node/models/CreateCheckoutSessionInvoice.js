import { d8347 as c0, d8344 as c2, d8345 as c3, d8346 as c4 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d249 as c1 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8186 as c5, d8187 as c6, d8188 as c7, d8189 as c8, d8190 as c9, d8191 as c10, d8192 as c11 } from '../descriptors/data/361.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d249 as d249 } from '../descriptors/data/11.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec355"]:c2(),["SharedCodec356"]:c3(),["SharedCodec357"]:c4(),["SharedCodec358"]:c5(),["SharedCodec359"]:c6(),["SharedCodec360"]:c7(),["SharedCodec361"]:c8(),["SharedCodec362"]:c9(),["SharedCodec363"]:c10(),["SharedCodec364"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
