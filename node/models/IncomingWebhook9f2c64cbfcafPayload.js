import { d502 as c0, d511 as c1, d757 as c2, d1343 as c3, d898 as c4, d323 as c5, d903 as c6, d66 as c7, d69 as c8, d67 as c9, d500 as c10, d897 as c11, d902 as c12, d1011 as c13, d68 as c14, d1342 as c15, d1341 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1343 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook9f2c64cbfcafPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec176"]:c10(),["SharedCodec250"]:c11(),["SharedCodec252"]:c12(),["SharedCodec285"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_issued_installed_merchants"]:c15(),["Webhook_credit_note_issued_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9f2c64cbfcafPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
