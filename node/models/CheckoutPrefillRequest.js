import { d8237 as c0, d8235 as c2, d8236 as c3 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8163 as c1 } from '../descriptors/data/359.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8163 as d8163 } from '../descriptors/data/359.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutPrefillRequest"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutPrefillRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
