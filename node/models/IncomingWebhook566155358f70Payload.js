import { d1159 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d996 as c6, d998 as c7, d1158 as c8, d1157 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1159 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook566155358f70Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec311"]:c6(),["SharedCodec312"]:c7(),["Webhook_invoice_delivery_succeeded_installed_merchants"]:c8(),["Webhook_invoice_delivery_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook566155358f70Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
