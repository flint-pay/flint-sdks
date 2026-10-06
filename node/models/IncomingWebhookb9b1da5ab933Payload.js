import { d1416 as c0, d930 as c1, d525 as c2, d929 as c3, d2571 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1416 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1416;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb9b1da5ab933Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_canceled_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb9b1da5ab933Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
