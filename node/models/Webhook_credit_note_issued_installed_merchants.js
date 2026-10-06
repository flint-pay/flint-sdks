import { d531 as c0, d765 as c1, d77 as c2, d924 as c3, d73 as c4, d76 as c5, d74 as c6, d923 as c7, d1032 as c8, d75 as c9, d1329 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1329 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec18"]:c5(),["SharedCodec19"]:c6(),["SharedCodec286"]:c7(),["SharedCodec319"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_issued_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
