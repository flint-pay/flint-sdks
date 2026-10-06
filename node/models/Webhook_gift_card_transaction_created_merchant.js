import { d906 as c0, d916 as c1, d520 as c2, d915 as c3, d40 as c4, d41 as c5, d933 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d933 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d933;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec281"]:c3(),["SharedCodec5"]:c4(),["SharedCodec6"]:c5(),["Webhook_gift_card_transaction_created_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
