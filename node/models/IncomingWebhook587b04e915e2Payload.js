import { d1160 as c0, d930 as c1, d525 as c2, d929 as c3, d2581 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1160 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook587b04e915e2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_payout_settings_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook587b04e915e2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
