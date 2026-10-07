import { d528 as c0, d537 as c1, d780 as c2, d1360 as c3, d936 as c4, d77 as c5, d944 as c6, d73 as c7, d76 as c8, d74 as c9, d526 as c10, d935 as c11, d943 as c12, d1052 as c13, d75 as c14, d1359 as c15, d1358 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1360 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook9f2c64cbfcafPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec18"]:c8(),["SharedCodec19"]:c9(),["SharedCodec199"]:c10(),["SharedCodec286"]:c11(),["SharedCodec291"]:c12(),["SharedCodec324"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_issued_installed_merchants"]:c15(),["Webhook_credit_note_issued_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9f2c64cbfcafPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
