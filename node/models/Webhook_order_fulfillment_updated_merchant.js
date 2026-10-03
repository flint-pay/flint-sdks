import { d911 as c0, d517 as c1, d910 as c2, d938 as c3, d939 as c4, d1041 as c5, d1042 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1042 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec316"]:c5(),["Webhook_order_fulfillment_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
