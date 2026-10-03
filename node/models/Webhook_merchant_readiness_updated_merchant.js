import { d909 as c0, d515 as c1, d908 as c2, d1489 as c3, d1487 as c4, d1486 as c5, d1485 as c6, d1488 as c7, d2519 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2519 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec394"]:c3(),["SharedCodec395"]:c4(),["SharedCodec396"]:c5(),["SharedCodec397"]:c6(),["SharedCodec398"]:c7(),["Webhook_merchant_readiness_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
