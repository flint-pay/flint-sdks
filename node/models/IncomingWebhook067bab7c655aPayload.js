import { d898 as c0, d929 as c1, d909 as c2, d917 as c3, d515 as c4, d857 as c5, d908 as c6, d916 as c7, d927 as c8, d928 as c9, d926 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d929 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec265"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec284"]:c8(),["Webhook_gift_card_transaction_created_installed_merchants"]:c9(),["Webhook_gift_card_transaction_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
