import { d1252 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d989 as c6, d1251 as c7, d1250 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1252 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8061fc32f027Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec308"]:c6(),["Webhook_order_payment_authorization_expired_installed_merchants"]:c7(),["Webhook_order_payment_authorization_expired_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8061fc32f027Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
