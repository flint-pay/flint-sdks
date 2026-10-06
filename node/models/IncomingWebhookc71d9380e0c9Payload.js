import { d1437 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d996 as c6, d998 as c7, d1436 as c8, d1435 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1437 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc71d9380e0c9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec311"]:c6(),["SharedCodec312"]:c7(),["Webhook_invoice_partially_paid_installed_merchants"]:c8(),["Webhook_invoice_partially_paid_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc71d9380e0c9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
