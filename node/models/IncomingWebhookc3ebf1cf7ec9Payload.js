import { d1433 as c0, d930 as c1, d525 as c2, d929 as c3, d2578 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1433 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc3ebf1cf7ec9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_paid_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc3ebf1cf7ec9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
