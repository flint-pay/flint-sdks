import { d1104 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1055 as c6, d1057 as c7, d1103 as c8, d1102 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1104 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b618fd743f5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec321"]:c6(),["SharedCodec322"]:c7(),["Webhook_refund_failed_installed_merchants"]:c8(),["Webhook_refund_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b618fd743f5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
