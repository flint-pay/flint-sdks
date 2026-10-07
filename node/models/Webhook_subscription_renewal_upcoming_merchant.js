import { d930 as c0, d525 as c1, d929 as c2, d1301 as c3, d1302 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1302 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec363"]:c3(),["Webhook_subscription_renewal_upcoming_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_renewal_upcoming_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
