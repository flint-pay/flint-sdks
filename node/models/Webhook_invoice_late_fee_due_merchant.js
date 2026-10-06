import { d1694 as c0, d930 as c1, d77 as c2, d525 as c3, d929 as c4, d932 as c5, d1461 as c6, d1692 as c7, d1693 as c8, d1462 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1462 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec395"]:c6(),["SharedCodec456"]:c7(),["SharedCodec457"]:c8(),["Webhook_invoice_late_fee_due_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
