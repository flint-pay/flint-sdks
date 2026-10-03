import { d1220 as c0, d909 as c1, d74 as c2, d917 as c3, d515 as c4, d908 as c5, d916 as c6, d1213 as c7, d1215 as c8, d1219 as c9, d1218 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1220 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook769913a11504Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec275"]:c5(),["SharedCodec280"]:c6(),["SharedCodec347"]:c7(),["SharedCodec348"]:c8(),["Webhook_invoice_late_fee_assessed_installed_merchants"]:c9(),["Webhook_invoice_late_fee_assessed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook769913a11504Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
