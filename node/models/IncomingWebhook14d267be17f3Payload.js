import { d528 as c0, d995 as c1, d930 as c2, d77 as c3, d938 as c4, d525 as c5, d929 as c6, d937 as c7, d993 as c8, d994 as c9, d992 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d995 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d995;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook14d267be17f3Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec282"]:c6(),["SharedCodec287"]:c7(),["SharedCodec310"]:c8(),["Webhook_credit_note_allocation_reversed_installed_merchants"]:c9(),["Webhook_credit_note_allocation_reversed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook14d267be17f3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
