import { d1134 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d975 as c6, d977 as c7, d1133 as c8, d1132 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1134 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook566155358f70Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_invoice_delivery_succeeded_installed_merchants"]:c8(),["Webhook_invoice_delivery_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook566155358f70Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
