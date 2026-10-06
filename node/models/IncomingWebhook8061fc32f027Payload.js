import { d1278 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1008 as c6, d1277 as c7, d1276 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1278 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8061fc32f027Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec315"]:c6(),["Webhook_order_payment_authorization_expired_installed_merchants"]:c7(),["Webhook_order_payment_authorization_expired_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8061fc32f027Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
