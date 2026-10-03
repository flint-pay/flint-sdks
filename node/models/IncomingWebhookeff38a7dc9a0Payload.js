import { d1514 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1510 as c6, d1512 as c7, d1513 as c8, d1511 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1514 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1514;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookeff38a7dc9a0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec401"]:c6(),["SharedCodec402"]:c7(),["Webhook_customer_deletion_rejected_installed_merchants"]:c8(),["Webhook_customer_deletion_rejected_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookeff38a7dc9a0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
