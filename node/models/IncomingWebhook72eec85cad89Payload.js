import { d1227 as c0, d893 as c1, d323 as c2, d901 as c3, d490 as c4, d892 as c5, d900 as c6, d1223 as c7, d1225 as c8, d1226 as c9, d1224 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1227 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook72eec85cad89Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec170"]:c4(),["SharedCodec246"]:c5(),["SharedCodec251"]:c6(),["SharedCodec326"]:c7(),["SharedCodec327"]:c8(),["Webhook_invoice_late_fee_waived_installed_merchants"]:c9(),["Webhook_invoice_late_fee_waived_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook72eec85cad89Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
