import { d1323 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1319 as c6, d1321 as c7, d1322 as c8, d1320 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1323 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook98a976c72b8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec346"]:c6(),["SharedCodec347"]:c7(),["Webhook_payment_method_removed_installed_merchants"]:c8(),["Webhook_payment_method_removed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook98a976c72b8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
