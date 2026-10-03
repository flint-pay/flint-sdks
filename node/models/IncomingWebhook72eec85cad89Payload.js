import { d1217 as c0, d909 as c1, d74 as c2, d917 as c3, d515 as c4, d908 as c5, d916 as c6, d1213 as c7, d1215 as c8, d1216 as c9, d1214 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1217 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1217;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook72eec85cad89Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec275"]:c5(),["SharedCodec280"]:c6(),["SharedCodec347"]:c7(),["SharedCodec348"]:c8(),["Webhook_invoice_late_fee_waived_installed_merchants"]:c9(),["Webhook_invoice_late_fee_waived_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook72eec85cad89Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
