import { d1562 as c0, d898 as c1, d903 as c2, d2100 as c3, d2160 as c4, d500 as c5, d897 as c6, d902 as c7, d1539 as c8, d1536 as c9, d1535 as c10, d1537 as c11, d1538 as c12, d1561 as c13, d1560 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1562 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf6f719ba2af4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["SharedCodec252"]:c7(),["SharedCodec385"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11(),["SharedCodec389"]:c12(),["Webhook_report_failed_installed_merchants"]:c13(),["Webhook_report_failed_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf6f719ba2af4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
