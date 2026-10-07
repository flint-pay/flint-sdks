import { d1494 as c0, d872 as c1, d880 as c2, d2034 as c3, d2094 as c4, d469 as c5, d871 as c6, d879 as c7, d1492 as c8, d1489 as c9, d1488 as c10, d1490 as c11, d1491 as c12, d1493 as c13, d1487 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1494 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["SharedCodec161"]:c5(),["SharedCodec237"]:c6(),["SharedCodec242"]:c7(),["SharedCodec366"]:c8(),["SharedCodec367"]:c9(),["SharedCodec368"]:c10(),["SharedCodec369"]:c11(),["SharedCodec370"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
