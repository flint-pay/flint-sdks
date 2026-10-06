import { d1440 as c0, d1669 as c1, d916 as c2, d77 as c3, d924 as c4, d520 as c5, d915 as c6, d918 as c7, d923 as c8, d1436 as c9, d1438 as c10, d1667 as c11, d1668 as c12, d1439 as c13, d1437 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1440 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec281"]:c6(),["SharedCodec284"]:c7(),["SharedCodec286"]:c8(),["SharedCodec393"]:c9(),["SharedCodec394"]:c10(),["SharedCodec454"]:c11(),["SharedCodec455"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
