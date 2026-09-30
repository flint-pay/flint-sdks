import { d479 as c0, d709 as c1, d69 as c2, d823 as c3, d65 as c4, d68 as c5, d66 as c6, d822 as c7, d923 as c8, d67 as c9, d1191 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1191 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1191;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec249"]:c7(),["SharedCodec280"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_issued_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_issued_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
