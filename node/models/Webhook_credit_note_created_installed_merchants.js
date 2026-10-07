import { d537 as c0, d780 as c1, d77 as c2, d944 as c3, d73 as c4, d76 as c5, d74 as c6, d943 as c7, d1052 as c8, d75 as c9, d1227 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1227 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec18"]:c5(),["SharedCodec19"]:c6(),["SharedCodec291"]:c7(),["SharedCodec324"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_created_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
