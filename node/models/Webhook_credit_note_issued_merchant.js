import { d470 as c0, d479 as c1, d709 as c2, d815 as c3, d69 as c4, d65 as c5, d68 as c6, d468 as c7, d66 as c8, d814 as c9, d67 as c10, d1190 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1190 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1190;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec17"]:c6(),["SharedCodec176"]:c7(),["SharedCodec18"]:c8(),["SharedCodec244"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_issued_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
