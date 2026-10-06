import { d901 as c0, d916 as c1, d520 as c2, d915 as c3, d41 as c4, d1325 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1325 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec281"]:c3(),["SharedCodec6"]:c4(),["Webhook_gift_card_redemption_created_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_redemption_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
