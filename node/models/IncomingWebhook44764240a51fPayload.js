import { d1107 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1103 as c6, d1102 as c7, d1105 as c8, d1106 as c9, d1104 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1107 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1107;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44764240a51fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec303"]:c6(),["SharedCodec304"]:c7(),["SharedCodec305"]:c8(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c9(),["Webhook_subscription_cancellation_scheduled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
