import { d1296 as c0, d930 as c1, d525 as c2, d929 as c3, d2542 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1296 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8d0ecb37ce13Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_dispute_won_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8d0ecb37ce13Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
