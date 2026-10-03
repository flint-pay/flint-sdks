import { d526 as c0, d757 as c1, d74 as c2, d917 as c3, d70 as c4, d73 as c5, d71 as c6, d916 as c7, d1025 as c8, d72 as c9, d1322 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1322 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1322;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec280"]:c7(),["SharedCodec313"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_issued_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
