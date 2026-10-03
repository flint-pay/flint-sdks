import { d517 as c0, d526 as c1, d757 as c2, d1323 as c3, d909 as c4, d74 as c5, d917 as c6, d70 as c7, d73 as c8, d71 as c9, d515 as c10, d908 as c11, d916 as c12, d1025 as c13, d72 as c14, d1322 as c15, d1321 as c16 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1323 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook9f2c64cbfcafPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec17"]:c8(),["SharedCodec18"]:c9(),["SharedCodec197"]:c10(),["SharedCodec275"]:c11(),["SharedCodec280"]:c12(),["SharedCodec313"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_issued_installed_merchants"]:c15(),["Webhook_credit_note_issued_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9f2c64cbfcafPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
