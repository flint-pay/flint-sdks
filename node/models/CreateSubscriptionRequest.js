import { d467 as c0, d66 as c1, d463 as c2, d464 as c3, d466 as c4, d465 as c5, d2290 as c6, d2291 as c7, d2313 as c8, d2314 as c9, d2289 as c10, d2292 as c11, d2315 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d467 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec157"]:c2(),["SharedCodec158"]:c3(),["SharedCodec159"]:c4(),["SharedCodec160"]:c5(),["SharedCodec560"]:c6(),["SharedCodec561"]:c7(),["SharedCodec568"]:c8(),["SharedCodec569"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
