import { d938 as c0, d933 as c1, d932 as c2, d936 as c3, d937 as c4, d1537 as c5 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1537 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec285"]:c2(),["SharedCodec286"]:c3(),["SharedCodec287"]:c4(),["Webhook_payment_intent_canceled_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
