import { d1548 as c0, d916 as c1, d924 as c2, d2113 as c3, d520 as c4, d915 as c5, d923 as c6, d1525 as c7, d1520 as c8, d1522 as c9, d1521 as c10, d1523 as c11, d1524 as c12, d1547 as c13, d1546 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1548 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1548;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf6f719ba2af4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec199"]:c4(),["SharedCodec281"]:c5(),["SharedCodec286"]:c6(),["SharedCodec408"]:c7(),["SharedCodec409"]:c8(),["SharedCodec410"]:c9(),["SharedCodec411"]:c10(),["SharedCodec412"]:c11(),["SharedCodec413"]:c12(),["Webhook_report_failed_installed_merchants"]:c13(),["Webhook_report_failed_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf6f719ba2af4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
