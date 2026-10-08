import { d893 as c0, d2083 as c1, d2144 as c2, d490 as c3, d892 as c4, d1534 as c5, d1533 as c6, d1535 as c7, d1536 as c8, d1558 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1558 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["Report"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
