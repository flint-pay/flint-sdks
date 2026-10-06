import { d919 as c0, d930 as c1, d525 as c2, d929 as c3, d40 as c4, d41 as c5, d947 as c6 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d947 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec5"]:c4(),["SharedCodec6"]:c5(),["Webhook_gift_card_transaction_created_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
