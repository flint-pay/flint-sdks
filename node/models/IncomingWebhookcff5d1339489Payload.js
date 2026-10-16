import { d1455 as c0, d1690 as c1, d898 as c2, d323 as c3, d903 as c4, d500 as c5, d897 as c6, d902 as c7, d1451 as c8, d1453 as c9, d1688 as c10, d1689 as c11, d1454 as c12, d1452 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1455 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["SharedCodec252"]:c7(),["SharedCodec370"]:c8(),["SharedCodec371"]:c9(),["SharedCodec434"]:c10(),["SharedCodec435"]:c11(),["Webhook_invoice_late_fee_due_installed_merchants"]:c12(),["Webhook_invoice_late_fee_due_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
