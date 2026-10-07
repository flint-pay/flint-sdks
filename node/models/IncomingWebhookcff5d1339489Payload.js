import { d1408 as c0, d1643 as c1, d872 as c2, d314 as c3, d880 as c4, d469 as c5, d871 as c6, d874 as c7, d879 as c8, d1404 as c9, d1406 as c10, d1641 as c11, d1642 as c12, d1407 as c13, d1405 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1408 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec240"]:c7(),["SharedCodec242"]:c8(),["SharedCodec351"]:c9(),["SharedCodec352"]:c10(),["SharedCodec415"]:c11(),["SharedCodec416"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
