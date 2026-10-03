import { d1394 as c0, d911 as c1, d517 as c2, d910 as c3, d2498 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1394 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbd445ea5b01aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_dispute_lost_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbd445ea5b01aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
