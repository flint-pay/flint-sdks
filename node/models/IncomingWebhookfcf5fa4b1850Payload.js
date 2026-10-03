import { d1556 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d987 as c6, d1555 as c7, d1554 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1556 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1556;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookfcf5fa4b1850Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec308"]:c6(),["Webhook_order_payment_authorization_canceled_installed_merchants"]:c7(),["Webhook_order_payment_authorization_canceled_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookfcf5fa4b1850Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
