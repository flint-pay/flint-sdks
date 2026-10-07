import { d1526 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d926 as c6, d1525 as c7, d1524 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1526 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookfce7e0c4eba0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec262"]:c6(),["Webhook_subscription_paused_installed_merchants"]:c7(),["Webhook_subscription_paused_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookfce7e0c4eba0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
