import { d911 as c0, d517 as c1, d910 as c2, d944 as c3, d938 as c4, d939 as c5, d942 as c6, d940 as c7, d941 as c8, d943 as c9, d945 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d945 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d945;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec288"]:c3(),["SharedCodec289"]:c4(),["SharedCodec290"]:c5(),["SharedCodec291"]:c6(),["SharedCodec292"]:c7(),["SharedCodec293"]:c8(),["SharedCodec294"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
