import { d855 as c0, d923 as c1, d872 as c2, d314 as c3, d880 as c4, d469 as c5, d871 as c6, d879 as c7, d921 as c8, d922 as c9, d920 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d923 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook0ed7a866163aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec242"]:c7(),["SharedCodec261"]:c8(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c9(),["Webhook_gift_card_redemption_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
