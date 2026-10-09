import { d492 as c0, d501 as c1, d747 as c2, d1101 as c3, d893 as c4, d323 as c5, d901 as c6, d66 as c7, d69 as c8, d67 as c9, d490 as c10, d892 as c11, d900 as c12, d1009 as c13, d68 as c14, d1100 as c15, d1099 as c16 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1101 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook43a17bfb8144Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec170"]:c10(),["SharedCodec246"]:c11(),["SharedCodec251"]:c12(),["SharedCodec284"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_voided_installed_merchants"]:c15(),["Webhook_credit_note_voided_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook43a17bfb8144Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
