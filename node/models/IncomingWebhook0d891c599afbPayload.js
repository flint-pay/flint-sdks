import { d939 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d935 as c6, d937 as c7, d938 as c8, d936 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d939 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d939;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d891c599afbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec268"]:c6(),["SharedCodec269"]:c7(),["Webhook_order_updated_installed_merchants"]:c8(),["Webhook_order_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d891c599afbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
