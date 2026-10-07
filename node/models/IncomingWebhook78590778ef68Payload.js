import { d1196 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1120 as c6, d1195 as c7, d1194 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1196 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook78590778ef68Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec299"]:c6(),["Webhook_customer_updated_installed_merchants"]:c7(),["Webhook_customer_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook78590778ef68Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
