import { d1688 as c0, d323 as c1, d901 as c2, d895 as c3, d900 as c4, d1451 as c5, d1686 as c6, d1687 as c7, d1452 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1452 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec249"]:c3(),["SharedCodec251"]:c4(),["SharedCodec370"]:c5(),["SharedCodec433"]:c6(),["SharedCodec434"]:c7(),["Webhook_invoice_late_fee_due_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
