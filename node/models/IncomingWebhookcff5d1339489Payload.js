import { d1453 as c0, d1688 as c1, d893 as c2, d323 as c3, d901 as c4, d490 as c5, d892 as c6, d895 as c7, d900 as c8, d1449 as c9, d1451 as c10, d1686 as c11, d1687 as c12, d1452 as c13, d1450 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1453 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1453;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["SharedCodec249"]:c7(),["SharedCodec251"]:c8(),["SharedCodec369"]:c9(),["SharedCodec370"]:c10(),["SharedCodec433"]:c11(),["SharedCodec434"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
