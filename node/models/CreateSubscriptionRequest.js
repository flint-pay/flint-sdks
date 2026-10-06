import { d523 as c0, d73 as c1, d519 as c2, d520 as c3, d522 as c4, d521 as c5, d2337 as c6, d2338 as c7, d2361 as c8, d2362 as c9, d2336 as c10, d2339 as c11, d2363 as c12 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d523 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec195"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec606"]:c6(),["SharedCodec607"]:c7(),["SharedCodec615"]:c8(),["SharedCodec616"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
