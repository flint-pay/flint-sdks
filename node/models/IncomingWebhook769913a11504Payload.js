import { d1254 as c0, d936 as c1, d77 as c2, d944 as c3, d526 as c4, d935 as c5, d943 as c6, d1247 as c7, d1249 as c8, d1253 as c9, d1252 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1254 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook769913a11504Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec286"]:c5(),["SharedCodec291"]:c6(),["SharedCodec359"]:c7(),["SharedCodec360"]:c8(),["Webhook_invoice_late_fee_assessed_installed_merchants"]:c9(),["Webhook_invoice_late_fee_assessed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook769913a11504Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
