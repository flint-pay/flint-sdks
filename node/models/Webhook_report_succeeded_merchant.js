import { d898 as c0, d2101 as c1, d2161 as c2, d500 as c3, d897 as c4, d1536 as c5, d1535 as c6, d1537 as c7, d1538 as c8, d1534 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1534 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["Report"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec386"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["SharedCodec389"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
