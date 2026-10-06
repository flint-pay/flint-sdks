import { d1393 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1389 as c6, d1391 as c7, d1392 as c8, d1390 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1393 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1293e1abb2aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec385"]:c6(),["SharedCodec386"]:c7(),["Webhook_payment_method_saved_installed_merchants"]:c8(),["Webhook_payment_method_saved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1293e1abb2aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
