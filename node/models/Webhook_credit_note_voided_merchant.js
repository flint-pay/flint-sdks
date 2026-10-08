import { d492 as c0, d501 as c1, d747 as c2, d893 as c3, d323 as c4, d66 as c5, d69 as c6, d67 as c7, d490 as c8, d892 as c9, d68 as c10, d1099 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1099 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1099;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec13"]:c6(),["SharedCodec14"]:c7(),["SharedCodec170"]:c8(),["SharedCodec246"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_voided_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_voided_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
