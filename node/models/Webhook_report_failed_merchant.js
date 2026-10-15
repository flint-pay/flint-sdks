import { d898 as c0, d2100 as c1, d2160 as c2, d500 as c3, d897 as c4, d1536 as c5, d1535 as c6, d1537 as c7, d1538 as c8, d1560 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1560 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1560;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["Report"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec386"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["SharedCodec389"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
