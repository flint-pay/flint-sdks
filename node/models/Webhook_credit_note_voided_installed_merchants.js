import { d536 as c0, d774 as c1, d77 as c2, d938 as c3, d73 as c4, d76 as c5, d74 as c6, d937 as c7, d1046 as c8, d75 as c9, d1126 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1126 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec18"]:c5(),["SharedCodec19"]:c6(),["SharedCodec287"]:c7(),["SharedCodec320"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_voided_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
