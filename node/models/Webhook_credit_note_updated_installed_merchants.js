import { d501 as c0, d747 as c1, d323 as c2, d901 as c3, d66 as c4, d69 as c5, d67 as c6, d900 as c7, d1009 as c8, d68 as c9, d1010 as c10 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1010 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec13"]:c5(),["SharedCodec14"]:c6(),["SharedCodec251"]:c7(),["SharedCodec284"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_updated_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
