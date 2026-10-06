import { d938 as c0, d932 as c1, d937 as c2, d1377 as c3, d1378 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1378 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec285"]:c1(),["SharedCodec287"]:c2(),["SharedCodec382"]:c3(),["Webhook_invoice_collection_blocked_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_collection_blocked_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
