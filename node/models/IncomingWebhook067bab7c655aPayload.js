import { d861 as c0, d892 as c1, d872 as c2, d314 as c3, d880 as c4, d469 as c5, d871 as c6, d879 as c7, d890 as c8, d1970 as c9, d891 as c10, d889 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d892 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d892;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec242"]:c7(),["SharedCodec246"]:c8(),["SignedMoney"]:c9(),["Webhook_gift_card_transaction_created_installed_merchants"]:c10(),["Webhook_gift_card_transaction_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
