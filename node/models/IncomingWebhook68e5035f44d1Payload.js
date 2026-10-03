import { d520 as c0, d1185 as c1, d911 as c2, d74 as c3, d919 as c4, d517 as c5, d910 as c6, d918 as c7, d974 as c8, d1184 as c9, d1183 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1185 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook68e5035f44d1Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec197"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec303"]:c8(),["Webhook_credit_note_allocation_created_installed_merchants"]:c9(),["Webhook_credit_note_allocation_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook68e5035f44d1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
