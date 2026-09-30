import { d470 as c0, d479 as c1, d709 as c2, d991 as c3, d815 as c4, d69 as c5, d823 as c6, d65 as c7, d68 as c8, d468 as c9, d66 as c10, d814 as c11, d822 as c12, d923 as c13, d67 as c14, d990 as c15, d989 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d991 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook43a17bfb8144Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec17"]:c8(),["SharedCodec176"]:c9(),["SharedCodec18"]:c10(),["SharedCodec244"]:c11(),["SharedCodec249"]:c12(),["SharedCodec280"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_voided_installed_merchants"]:c15(),["Webhook_credit_note_voided_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook43a17bfb8144Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
