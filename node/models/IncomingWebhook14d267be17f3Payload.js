import { d523 as c0, d981 as c1, d916 as c2, d77 as c3, d924 as c4, d520 as c5, d915 as c6, d923 as c7, d979 as c8, d980 as c9, d978 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d981 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d981;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook14d267be17f3Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec281"]:c6(),["SharedCodec286"]:c7(),["SharedCodec309"]:c8(),["Webhook_credit_note_allocation_reversed_installed_merchants"]:c9(),["Webhook_credit_note_allocation_reversed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook14d267be17f3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
