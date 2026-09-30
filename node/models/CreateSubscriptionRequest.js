import { d466 as c0, d65 as c1, d462 as c2, d463 as c3, d465 as c4, d464 as c5, d2132 as c6, d2133 as c7, d2155 as c8, d2156 as c9, d2131 as c10, d2134 as c11, d2157 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d466 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec172"]:c2(),["SharedCodec173"]:c3(),["SharedCodec174"]:c4(),["SharedCodec175"]:c5(),["SharedCodec541"]:c6(),["SharedCodec542"]:c7(),["SharedCodec550"]:c8(),["SharedCodec551"]:c9(),["SubscriptionBillingScheduleRequest"]:c10(),["SubscriptionBillingStartRequest"]:c11(),["SubscriptionServiceLocationRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
