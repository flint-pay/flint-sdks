import { d909 as c0, d515 as c1, d908 as c2, d942 as c3, d936 as c4, d937 as c5, d940 as c6, d938 as c7, d939 as c8, d941 as c9, d943 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d943 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d943;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec288"]:c3(),["SharedCodec289"]:c4(),["SharedCodec290"]:c5(),["SharedCodec291"]:c6(),["SharedCodec292"]:c7(),["SharedCodec293"]:c8(),["SharedCodec294"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
