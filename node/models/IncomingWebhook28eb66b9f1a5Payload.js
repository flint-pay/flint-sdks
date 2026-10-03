import { d1038 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1034 as c6, d1036 as c7, d1037 as c8, d1035 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1038 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1038;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28eb66b9f1a5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec314"]:c6(),["SharedCodec315"]:c7(),["Webhook_refund_updated_installed_merchants"]:c8(),["Webhook_refund_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
