import { d1529 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d950 as c6, d1528 as c7, d1527 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1529 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookfcf5fa4b1850Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec270"]:c6(),["Webhook_order_payment_authorization_canceled_installed_merchants"]:c7(),["Webhook_order_payment_authorization_canceled_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookfcf5fa4b1850Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
