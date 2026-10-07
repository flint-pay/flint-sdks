import { d1313 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d997 as c6, d999 as c7, d1312 as c8, d1311 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1313 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9876afe4b94Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec276"]:c6(),["SharedCodec277"]:c7(),["Webhook_refund_created_installed_merchants"]:c8(),["Webhook_refund_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9876afe4b94Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
