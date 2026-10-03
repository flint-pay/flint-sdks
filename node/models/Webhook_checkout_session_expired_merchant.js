import { d911 as c0, d517 as c1, d910 as c2, d1463 as c3, d1464 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1464 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec390"]:c3(),["Webhook_checkout_session_expired_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_checkout_session_expired_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
