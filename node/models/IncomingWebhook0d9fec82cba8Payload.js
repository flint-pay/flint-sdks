import { d958 as c0, d1766 as c1, d1767 as c2, d911 as c3, d74 as c4, d517 as c5, d910 as c6, d2524 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d958 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d958;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d9fec82cba8Payload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec197"]:c5(),["SharedCodec275"]:c6(),["Webhook_merchant_subscription_invoice_updated_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d9fec82cba8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
