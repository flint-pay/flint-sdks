import { d515 as c0, d70 as c1, d511 as c2, d512 as c3, d514 as c4, d513 as c5, d2299 as c6, d2300 as c7, d2323 as c8, d2324 as c9, d2298 as c10, d2301 as c11, d2325 as c12 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d515 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec193"]:c2(),["SharedCodec194"]:c3(),["SharedCodec195"]:c4(),["SharedCodec196"]:c5(),["SharedCodec592"]:c6(),["SharedCodec593"]:c7(),["SharedCodec601"]:c8(),["SharedCodec602"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
