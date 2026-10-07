import { d529 as c0, d1001 as c1, d936 as c2, d77 as c3, d944 as c4, d526 as c5, d935 as c6, d943 as c7, d999 as c8, d1000 as c9, d998 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1001 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook14d267be17f3Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec286"]:c6(),["SharedCodec291"]:c7(),["SharedCodec314"]:c8(),["Webhook_credit_note_allocation_reversed_installed_merchants"]:c9(),["Webhook_credit_note_allocation_reversed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook14d267be17f3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
