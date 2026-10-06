import { d991 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d987 as c7, d989 as c8, d990 as c9, d988 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d991 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook13640c439e38Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec308"]:c7(),["SharedCodec309"]:c8(),["Webhook_invoice_payment_attempt_canceled_installed_merchants"]:c9(),["Webhook_invoice_payment_attempt_canceled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook13640c439e38Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
