import { d845 as c0, d1140 as c1, d893 as c2, d323 as c3, d901 as c4, d490 as c5, d892 as c6, d900 as c7, d1091 as c8, d1139 as c9, d1138 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1140 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook588d0bbca380Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["SharedCodec251"]:c7(),["SharedCodec300"]:c8(),["Webhook_gift_card_created_installed_merchants"]:c9(),["Webhook_gift_card_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
