import { d924 as c0, d923 as c1, d1525 as c2, d1520 as c3, d1522 as c4, d1521 as c5, d1523 as c6, d1524 as c7, d1526 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1526 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec286"]:c1(),["SharedCodec408"]:c2(),["SharedCodec409"]:c3(),["SharedCodec410"]:c4(),["SharedCodec411"]:c5(),["SharedCodec412"]:c6(),["SharedCodec413"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
