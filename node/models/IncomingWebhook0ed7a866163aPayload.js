import { d876 as c0, d944 as c1, d893 as c2, d323 as c3, d901 as c4, d490 as c5, d892 as c6, d900 as c7, d942 as c8, d943 as c9, d941 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d944 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d944;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook0ed7a866163aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["SharedCodec251"]:c7(),["SharedCodec270"]:c8(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c9(),["Webhook_gift_card_redemption_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
