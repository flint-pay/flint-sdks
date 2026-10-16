import { d881 as c0, d946 as c1, d898 as c2, d323 as c3, d903 as c4, d500 as c5, d897 as c6, d902 as c7, d944 as c8, d945 as c9, d943 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d946 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d946;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook0ed7a866163aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["SharedCodec252"]:c7(),["SharedCodec271"]:c8(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c9(),["Webhook_gift_card_redemption_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
