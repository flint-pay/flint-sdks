import { d1433 as c0, d930 as c1, d525 as c2, d929 as c3, d2578 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1433 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc3ebf1cf7ec9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_paid_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc3ebf1cf7ec9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
