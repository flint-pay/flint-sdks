import { d1412 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1408 as c7, d1410 as c8, d1411 as c9, d1409 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1412 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1412;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb65376063a56Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec391"]:c7(),["SharedCodec392"]:c8(),["Webhook_invoice_issue_failed_installed_merchants"]:c9(),["Webhook_invoice_issue_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb65376063a56Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
