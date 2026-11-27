import { d8347 as c0, d8344 as c2, d8345 as c3, d8346 as c4 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d326 as c1 } from '../descriptors/data/17.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9709 as c5, d9710 as c6, d9711 as c7, d9712 as c8, d9713 as c9 } from '../descriptors/data/448.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d326 as d326 } from '../descriptors/data/17.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec355"]:c2(),["SharedCodec356"]:c3(),["SharedCodec357"]:c4(),["SharedCodec475"]:c5(),["SharedCodec476"]:c6(),["SharedCodec477"]:c7(),["SharedCodec478"]:c8(),["SharedCodec479"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
