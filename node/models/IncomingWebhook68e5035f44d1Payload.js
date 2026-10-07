import { d472 as c0, d1153 as c1, d872 as c2, d314 as c3, d880 as c4, d469 as c5, d871 as c6, d879 as c7, d935 as c8, d1152 as c9, d1151 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1153 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook68e5035f44d1Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec242"]:c7(),["SharedCodec265"]:c8(),["Webhook_credit_note_allocation_created_installed_merchants"]:c9(),["Webhook_credit_note_allocation_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook68e5035f44d1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
