import { d872 as c0, d2034 as c1, d2094 as c2, d469 as c3, d871 as c4, d1489 as c5, d1488 as c6, d1490 as c7, d1491 as c8, d1487 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1487 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["Report"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec367"]:c5(),["SharedCodec368"]:c6(),["SharedCodec369"]:c7(),["SharedCodec370"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
