import { d480 as c0, d726 as c1, d314 as c2, d880 as c3, d66 as c4, d69 as c5, d67 as c6, d879 as c7, d988 as c8, d68 as c9, d1163 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1163 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec13"]:c5(),["SharedCodec14"]:c6(),["SharedCodec242"]:c7(),["SharedCodec275"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_created_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
