import { d502 as c0, d511 as c1, d757 as c2, d898 as c3, d323 as c4, d66 as c5, d69 as c6, d67 as c7, d500 as c8, d897 as c9, d68 as c10, d1010 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1010 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec13"]:c6(),["SharedCodec14"]:c7(),["SharedCodec176"]:c8(),["SharedCodec250"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
