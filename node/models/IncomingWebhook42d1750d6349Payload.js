import { d824 as c0, d1061 as c1, d872 as c2, d314 as c3, d880 as c4, d469 as c5, d871 as c6, d879 as c7, d1059 as c8, d1060 as c9, d1058 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1061 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook42d1750d6349Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec242"]:c7(),["SharedCodec286"]:c8(),["Webhook_gift_card_updated_installed_merchants"]:c9(),["Webhook_gift_card_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42d1750d6349Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
