import { d528 as c0, d537 as c1, d780 as c2, d936 as c3, d77 as c4, d73 as c5, d76 as c6, d74 as c7, d526 as c8, d935 as c9, d75 as c10, d1358 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1358 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec18"]:c6(),["SharedCodec19"]:c7(),["SharedCodec199"]:c8(),["SharedCodec286"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_issued_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
