import { d872 as c0, d469 as c1, d871 as c2, d874 as c3, d1094 as c4, d2512 as c5 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2512 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2512;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec161"]:c1(),["SharedCodec237"]:c2(),["SharedCodec240"]:c3(),["SharedCodec295"]:c4(),["Webhook_merchant_billing_balance_updated_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_billing_balance_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
