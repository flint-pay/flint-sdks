import { d1343 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1036 as c6, d1038 as c7, d1342 as c8, d1341 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1343 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9876afe4b94Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec314"]:c6(),["SharedCodec315"]:c7(),["Webhook_refund_created_installed_merchants"]:c8(),["Webhook_refund_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9876afe4b94Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
