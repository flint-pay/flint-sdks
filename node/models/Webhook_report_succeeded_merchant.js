import { d893 as c0, d2083 as c1, d2144 as c2, d490 as c3, d892 as c4, d1534 as c5, d1533 as c6, d1535 as c7, d1536 as c8, d1532 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1532 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["Report"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
