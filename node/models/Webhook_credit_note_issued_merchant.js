import { d517 as c0, d526 as c1, d757 as c2, d909 as c3, d74 as c4, d70 as c5, d73 as c6, d71 as c7, d515 as c8, d908 as c9, d72 as c10, d1321 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1321 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec17"]:c6(),["SharedCodec18"]:c7(),["SharedCodec197"]:c8(),["SharedCodec275"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_issued_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
