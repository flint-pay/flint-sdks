import { d492 as c0, d501 as c1, d747 as c2, d893 as c3, d323 as c4, d66 as c5, d69 as c6, d67 as c7, d490 as c8, d892 as c9, d68 as c10, d1008 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1008 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec13"]:c6(),["SharedCodec14"]:c7(),["SharedCodec170"]:c8(),["SharedCodec246"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
