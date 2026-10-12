import { d492 as c0, d501 as c1, d747 as c2, d893 as c3, d323 as c4, d66 as c5, d69 as c6, d67 as c7, d490 as c8, d892 as c9, d68 as c10, d1197 as c11 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1197 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec13"]:c6(),["SharedCodec14"]:c7(),["SharedCodec170"]:c8(),["SharedCodec246"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
