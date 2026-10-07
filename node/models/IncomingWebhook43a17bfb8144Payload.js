import { d471 as c0, d480 as c1, d726 as c2, d1069 as c3, d872 as c4, d314 as c5, d880 as c6, d66 as c7, d69 as c8, d67 as c9, d469 as c10, d871 as c11, d879 as c12, d988 as c13, d68 as c14, d1068 as c15, d1067 as c16 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1069 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook43a17bfb8144Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec13"]:c8(),["SharedCodec14"]:c9(),["SharedCodec161"]:c10(),["SharedCodec237"]:c11(),["SharedCodec242"]:c12(),["SharedCodec275"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_voided_installed_merchants"]:c15(),["Webhook_credit_note_voided_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook43a17bfb8144Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
