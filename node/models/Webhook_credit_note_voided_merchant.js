import { d522 as c0, d531 as c1, d765 as c2, d916 as c3, d77 as c4, d73 as c5, d76 as c6, d74 as c7, d520 as c8, d915 as c9, d75 as c10, d1107 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1107 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1107;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec18"]:c6(),["SharedCodec19"]:c7(),["SharedCodec199"]:c8(),["SharedCodec281"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_voided_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
