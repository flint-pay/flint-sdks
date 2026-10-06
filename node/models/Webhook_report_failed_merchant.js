import { d916 as c0, d2113 as c1, d520 as c2, d915 as c3, d1520 as c4, d1522 as c5, d1521 as c6, d1523 as c7, d1524 as c8, d1546 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1546 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec199"]:c2(),["SharedCodec281"]:c3(),["SharedCodec409"]:c4(),["SharedCodec410"]:c5(),["SharedCodec411"]:c6(),["SharedCodec412"]:c7(),["SharedCodec413"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
