import { d1023 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d975 as c6, d977 as c7, d1022 as c8, d1021 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1023 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2786e5956695Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_invoice_manual_payment_recorded_installed_merchants"]:c8(),["Webhook_invoice_manual_payment_recorded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2786e5956695Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
