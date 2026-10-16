import { d511 as c0, d757 as c1, d323 as c2, d903 as c3, d66 as c4, d69 as c5, d67 as c6, d902 as c7, d1011 as c8, d68 as c9, d1102 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1102 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec13"]:c5(),["SharedCodec14"]:c6(),["SharedCodec252"]:c7(),["SharedCodec285"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_voided_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
