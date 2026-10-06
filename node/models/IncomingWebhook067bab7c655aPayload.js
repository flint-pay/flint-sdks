import { d906 as c0, d936 as c1, d916 as c2, d924 as c3, d520 as c4, d915 as c5, d923 as c6, d934 as c7, d40 as c8, d41 as c9, d935 as c10, d933 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d936 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d936;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec281"]:c5(),["SharedCodec286"]:c6(),["SharedCodec290"]:c7(),["SharedCodec5"]:c8(),["SharedCodec6"]:c9(),["Webhook_gift_card_transaction_created_installed_merchants"]:c10(),["Webhook_gift_card_transaction_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
