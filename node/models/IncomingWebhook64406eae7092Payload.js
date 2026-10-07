import { d1138 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d911 as c6, d1137 as c7, d1136 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1138 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook64406eae7092Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec258"]:c6(),["Webhook_return_updated_installed_merchants"]:c7(),["Webhook_return_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook64406eae7092Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
