import { d502 as c0, d511 as c1, d757 as c2, d898 as c3, d323 as c4, d66 as c5, d69 as c6, d67 as c7, d500 as c8, d897 as c9, d68 as c10, d1101 as c11 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1101 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec13"]:c6(),["SharedCodec14"]:c7(),["SharedCodec176"]:c8(),["SharedCodec250"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_voided_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
