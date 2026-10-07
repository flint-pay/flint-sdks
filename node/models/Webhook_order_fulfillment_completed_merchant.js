import { d930 as c0, d525 as c1, d929 as c2, d957 as c3, d958 as c4, d1060 as c5, d1451 as c6 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1451 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec323"]:c5(),["Webhook_order_fulfillment_completed_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
