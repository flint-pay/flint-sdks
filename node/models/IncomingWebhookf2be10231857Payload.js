import { d1541 as c0, d898 as c1, d903 as c2, d2101 as c3, d2161 as c4, d500 as c5, d897 as c6, d902 as c7, d1539 as c8, d1536 as c9, d1535 as c10, d1537 as c11, d1538 as c12, d1540 as c13, d1534 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1541 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["SharedCodec252"]:c7(),["SharedCodec385"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11(),["SharedCodec389"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
