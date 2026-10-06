import { d522 as c0, d531 as c1, d765 as c2, d1201 as c3, d916 as c4, d77 as c5, d924 as c6, d73 as c7, d76 as c8, d74 as c9, d520 as c10, d915 as c11, d923 as c12, d1032 as c13, d75 as c14, d1200 as c15, d1199 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1201 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook6d96c0c875cdPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec18"]:c8(),["SharedCodec19"]:c9(),["SharedCodec199"]:c10(),["SharedCodec281"]:c11(),["SharedCodec286"]:c12(),["SharedCodec319"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_created_installed_merchants"]:c15(),["Webhook_credit_note_created_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6d96c0c875cdPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
