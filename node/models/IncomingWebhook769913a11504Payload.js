import { d1248 as c0, d930 as c1, d77 as c2, d938 as c3, d525 as c4, d929 as c5, d937 as c6, d1241 as c7, d1243 as c8, d1247 as c9, d1246 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1248 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook769913a11504Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec355"]:c7(),["SharedCodec356"]:c8(),["Webhook_invoice_late_fee_assessed_installed_merchants"]:c9(),["Webhook_invoice_late_fee_assessed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook769913a11504Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
