import { d520 as c0, d976 as c1, d911 as c2, d74 as c3, d919 as c4, d517 as c5, d910 as c6, d918 as c7, d974 as c8, d975 as c9, d973 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d976 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["IncomingWebhook14d267be17f3Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec197"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec303"]:c8(),["Webhook_credit_note_allocation_reversed_installed_merchants"]:c9(),["Webhook_credit_note_allocation_reversed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook14d267be17f3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
