import { d901 as c0, d2083 as c1, d900 as c2, d1537 as c3, d1534 as c4, d1533 as c5, d1535 as c6, d1536 as c7, d1559 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1559 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1559;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["SharedCodec251"]:c2(),["SharedCodec384"]:c3(),["SharedCodec385"]:c4(),["SharedCodec386"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["Webhook_report_failed_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
