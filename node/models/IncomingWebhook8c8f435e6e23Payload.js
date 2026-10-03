import { d1267 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1263 as c7, d1265 as c8, d1266 as c9, d1264 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1267 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8c8f435e6e23Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec353"]:c7(),["SharedCodec354"]:c8(),["Webhook_invoice_updated_installed_merchants"]:c9(),["Webhook_invoice_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8c8f435e6e23Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
