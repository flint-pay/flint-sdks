import { d876 as c0, d1338 as c1, d893 as c2, d323 as c3, d901 as c4, d490 as c5, d892 as c6, d900 as c7, d942 as c8, d1337 as c9, d1336 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1338 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1338;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook9d6f9adeef1cPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["SharedCodec251"]:c7(),["SharedCodec270"]:c8(),["Webhook_gift_card_redemption_created_installed_merchants"]:c9(),["Webhook_gift_card_redemption_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9d6f9adeef1cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
