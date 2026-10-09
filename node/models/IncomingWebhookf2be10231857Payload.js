import { d1539 as c0, d893 as c1, d901 as c2, d2083 as c3, d2144 as c4, d490 as c5, d892 as c6, d900 as c7, d1537 as c8, d1534 as c9, d1533 as c10, d1535 as c11, d1536 as c12, d1538 as c13, d1532 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1539 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["SharedCodec170"]:c5(),["SharedCodec246"]:c6(),["SharedCodec251"]:c7(),["SharedCodec384"]:c8(),["SharedCodec385"]:c9(),["SharedCodec386"]:c10(),["SharedCodec387"]:c11(),["SharedCodec388"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
