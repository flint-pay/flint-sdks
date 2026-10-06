import { d1180 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1178 as c6, d1179 as c7, d1177 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1180 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook607f05b24d65Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec344"]:c6(),["Webhook_customer_created_installed_merchants"]:c7(),["Webhook_customer_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook607f05b24d65Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
