import { d1690 as c0, d323 as c1, d903 as c2, d902 as c3, d1453 as c4, d1688 as c5, d1689 as c6, d1454 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1454 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1454;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec252"]:c3(),["SharedCodec371"]:c4(),["SharedCodec434"]:c5(),["SharedCodec435"]:c6(),["Webhook_invoice_late_fee_due_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
