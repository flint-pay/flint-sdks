import { d919 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d915 as c6, d914 as c7, d917 as c8, d918 as c9, d916 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d919 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d919;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook06baf65fb878Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec256"]:c6(),["SharedCodec257"]:c7(),["SharedCodec258"]:c8(),["Webhook_payment_intent_fulfillment_hold_updated_installed_merchants"]:c9(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook06baf65fb878Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
