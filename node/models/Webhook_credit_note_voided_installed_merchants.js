import { d501 as c0, d747 as c1, d323 as c2, d901 as c3, d66 as c4, d69 as c5, d67 as c6, d900 as c7, d1009 as c8, d68 as c9, d1100 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1100 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec13"]:c5(),["SharedCodec14"]:c6(),["SharedCodec251"]:c7(),["SharedCodec284"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_voided_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
