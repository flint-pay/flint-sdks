import { d513 as c0, d70 as c1, d509 as c2, d510 as c3, d512 as c4, d511 as c5, d2296 as c6, d2297 as c7, d2320 as c8, d2321 as c9, d2295 as c10, d2298 as c11, d2322 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d513 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec193"]:c2(),["SharedCodec194"]:c3(),["SharedCodec195"]:c4(),["SharedCodec196"]:c5(),["SharedCodec592"]:c6(),["SharedCodec593"]:c7(),["SharedCodec601"]:c8(),["SharedCodec602"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
