import { d1365 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d876 as c5, d875 as c6, d874 as c7, d878 as c8, d879 as c9, d1364 as c10, d1363 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1365 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbca943d8a28aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec238"]:c5(),["SharedCodec239"]:c6(),["SharedCodec240"]:c7(),["SharedCodec241"]:c8(),["SharedCodec242"]:c9(),["Webhook_payment_intent_payment_failed_installed_merchants"]:c10(),["Webhook_payment_intent_payment_failed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbca943d8a28aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
