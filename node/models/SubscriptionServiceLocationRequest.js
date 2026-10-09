import { d66 as c0, d2396 as c1, d2397 as c2, d2398 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2398 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["SharedCodec593"]:c1(),["SharedCodec594"]:c2(),["SubscriptionServiceLocationRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
