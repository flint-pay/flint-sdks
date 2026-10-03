import { d517 as c0, d526 as c1, d757 as c2, d909 as c3, d74 as c4, d70 as c5, d73 as c6, d71 as c7, d515 as c8, d908 as c9, d72 as c10, d1100 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1100 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec17"]:c6(),["SharedCodec18"]:c7(),["SharedCodec197"]:c8(),["SharedCodec275"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_voided_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
