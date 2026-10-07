import { d524 as c0, d73 as c1, d520 as c2, d521 as c3, d523 as c4, d522 as c5, d2345 as c6, d2346 as c7, d2368 as c8, d2369 as c9, d2344 as c10, d2347 as c11, d2370 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d524 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d524;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec195"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec611"]:c6(),["SharedCodec612"]:c7(),["SharedCodec620"]:c8(),["SharedCodec621"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
