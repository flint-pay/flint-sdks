import { d876 as c0, d893 as c1, d323 as c2, d490 as c3, d892 as c4, d941 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d941 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["Webhook_gift_card_redemption_updated_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_redemption_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
