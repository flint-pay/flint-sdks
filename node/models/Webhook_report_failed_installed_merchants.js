import { d903 as c0, d2100 as c1, d902 as c2, d1539 as c3, d1536 as c4, d1535 as c5, d1537 as c6, d1538 as c7, d1561 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1561 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["SharedCodec252"]:c2(),["SharedCodec385"]:c3(),["SharedCodec386"]:c4(),["SharedCodec387"]:c5(),["SharedCodec388"]:c6(),["SharedCodec389"]:c7(),["Webhook_report_failed_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
