import { d1476 as c0, d930 as c1, d525 as c2, d929 as c3, d2541 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1476 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd5c9a344b9b1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_dispute_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd5c9a344b9b1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
