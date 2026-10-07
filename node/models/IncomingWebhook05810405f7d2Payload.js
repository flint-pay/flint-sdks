import { d946 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d942 as c6, d941 as c7, d944 as c8, d945 as c9, d943 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d946 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d946;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook05810405f7d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["Webhook_order_fulfillment_event_created_installed_merchants"]:c9(),["Webhook_order_fulfillment_event_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
