import { d1148 as c0, d930 as c1, d525 as c2, d929 as c3, d2575 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1148 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook527f9bd2c39dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_destination_disabled_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook527f9bd2c39dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
