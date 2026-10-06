import { d865 as c0, d1145 as c1, d916 as c2, d924 as c3, d520 as c4, d915 as c5, d923 as c6, d1099 as c7, d41 as c8, d1144 as c9, d1143 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1145 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook588d0bbca380Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec281"]:c5(),["SharedCodec286"]:c6(),["SharedCodec329"]:c7(),["SharedCodec6"]:c8(),["Webhook_gift_card_created_installed_merchants"]:c9(),["Webhook_gift_card_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
