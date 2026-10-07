import { d1199 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d911 as c6, d1198 as c7, d1197 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1199 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7adf7ff33e7aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec258"]:c6(),["Webhook_return_inspection_created_installed_merchants"]:c7(),["Webhook_return_inspection_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7adf7ff33e7aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
