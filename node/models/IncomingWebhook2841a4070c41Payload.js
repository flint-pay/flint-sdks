import { d527 as c0, d536 as c1, d774 as c2, d1048 as c3, d930 as c4, d77 as c5, d938 as c6, d73 as c7, d76 as c8, d74 as c9, d525 as c10, d929 as c11, d937 as c12, d1046 as c13, d75 as c14, d1047 as c15, d1045 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1048 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook2841a4070c41Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec18"]:c8(),["SharedCodec19"]:c9(),["SharedCodec199"]:c10(),["SharedCodec282"]:c11(),["SharedCodec287"]:c12(),["SharedCodec320"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_updated_installed_merchants"]:c15(),["Webhook_credit_note_updated_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2841a4070c41Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
