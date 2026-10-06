import { d1110 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1106 as c7, d1108 as c8, d1109 as c9, d1107 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1110 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1110;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3bed705c5a7fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec329"]:c7(),["SharedCodec330"]:c8(),["Webhook_invoice_marked_uncollectible_installed_merchants"]:c9(),["Webhook_invoice_marked_uncollectible_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3bed705c5a7fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
