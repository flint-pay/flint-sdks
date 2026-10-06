import { d919 as c0, d950 as c1, d930 as c2, d938 as c3, d525 as c4, d929 as c5, d937 as c6, d948 as c7, d40 as c8, d41 as c9, d949 as c10, d947 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d950 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec291"]:c7(),["SharedCodec5"]:c8(),["SharedCodec6"]:c9(),["Webhook_gift_card_transaction_created_installed_merchants"]:c10(),["Webhook_gift_card_transaction_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
