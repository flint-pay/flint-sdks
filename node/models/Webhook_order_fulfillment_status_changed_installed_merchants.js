import { d919 as c0, d918 as c1, d938 as c2, d939 as c3, d1280 as c4, d1283 as c5, d1284 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1284 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1284;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec289"]:c2(),["SharedCodec290"]:c3(),["SharedCodec358"]:c4(),["SharedCodec359"]:c5(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
