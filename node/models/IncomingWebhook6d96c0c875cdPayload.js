import { d517 as c0, d526 as c1, d757 as c2, d1194 as c3, d909 as c4, d74 as c5, d917 as c6, d70 as c7, d73 as c8, d71 as c9, d515 as c10, d908 as c11, d916 as c12, d1025 as c13, d72 as c14, d1193 as c15, d1192 as c16 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1194 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook6d96c0c875cdPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec17"]:c8(),["SharedCodec18"]:c9(),["SharedCodec197"]:c10(),["SharedCodec275"]:c11(),["SharedCodec280"]:c12(),["SharedCodec313"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_created_installed_merchants"]:c15(),["Webhook_credit_note_created_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6d96c0c875cdPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
