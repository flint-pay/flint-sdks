import { d881 as c0, d898 as c1, d323 as c2, d500 as c3, d897 as c4, d1338 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1338 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1338;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["Webhook_gift_card_redemption_created_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_redemption_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
