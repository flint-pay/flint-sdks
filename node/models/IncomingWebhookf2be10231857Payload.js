import { d1552 as c0, d930 as c1, d938 as c2, d2139 as c3, d525 as c4, d929 as c5, d937 as c6, d1550 as c7, d1545 as c8, d1547 as c9, d1546 as c10, d1548 as c11, d1549 as c12, d1551 as c13, d1544 as c14 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1552 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1552;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec410"]:c7(),["SharedCodec411"]:c8(),["SharedCodec412"]:c9(),["SharedCodec413"]:c10(),["SharedCodec414"]:c11(),["SharedCodec415"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
