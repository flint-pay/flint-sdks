import { d1124 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1120 as c6, d1122 as c7, d1123 as c8, d1121 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1124 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook42dd85c73d6bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec332"]:c6(),["SharedCodec333"]:c7(),["Webhook_subscription_reactivated_installed_merchants"]:c8(),["Webhook_subscription_reactivated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42dd85c73d6bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
