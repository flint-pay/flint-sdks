import { d1415 as c0, d930 as c1, d525 as c2, d929 as c3, d2541 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1415 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1415;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb887d4b2753cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_dispute_warning_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb887d4b2753cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
