import { d1227 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1223 as c6, d1225 as c7, d1226 as c8, d1224 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1227 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6e888acafb4bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec353"]:c6(),["SharedCodec354"]:c7(),["Webhook_checkout_session_closed_installed_merchants"]:c8(),["Webhook_checkout_session_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6e888acafb4bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
