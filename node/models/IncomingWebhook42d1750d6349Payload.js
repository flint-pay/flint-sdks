import { d850 as c0, d1095 as c1, d898 as c2, d323 as c3, d903 as c4, d500 as c5, d897 as c6, d902 as c7, d1093 as c8, d1094 as c9, d1092 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1095 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1095;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook42d1750d6349Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["SharedCodec252"]:c7(),["SharedCodec301"]:c8(),["Webhook_gift_card_updated_installed_merchants"]:c9(),["Webhook_gift_card_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42d1750d6349Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
