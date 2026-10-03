import { d1088 as c0, d911 as c1, d517 as c2, d910 as c3, d2505 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1088 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1088;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3dbc0a577678Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_inventory_count_applied_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3dbc0a577678Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
