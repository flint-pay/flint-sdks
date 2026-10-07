import { d1022 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1008 as c6, d1021 as c7, d1020 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1022 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1022;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2100acf09455Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec315"]:c6(),["Webhook_order_payment_authorized_installed_merchants"]:c7(),["Webhook_order_payment_authorized_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2100acf09455Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
