import { d526 as c0, d757 as c1, d74 as c2, d917 as c3, d70 as c4, d73 as c5, d71 as c6, d916 as c7, d1025 as c8, d72 as c9, d1193 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1193 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec280"]:c7(),["SharedCodec313"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_created_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
