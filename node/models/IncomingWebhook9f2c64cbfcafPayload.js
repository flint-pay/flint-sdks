import { d527 as c0, d536 as c1, d774 as c2, d1354 as c3, d930 as c4, d77 as c5, d938 as c6, d73 as c7, d76 as c8, d74 as c9, d525 as c10, d929 as c11, d937 as c12, d1046 as c13, d75 as c14, d1353 as c15, d1352 as c16 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1354 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook9f2c64cbfcafPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec18"]:c8(),["SharedCodec19"]:c9(),["SharedCodec199"]:c10(),["SharedCodec282"]:c11(),["SharedCodec287"]:c12(),["SharedCodec320"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_issued_installed_merchants"]:c15(),["Webhook_credit_note_issued_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9f2c64cbfcafPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
