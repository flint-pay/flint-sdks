import { d893 as c0, d490 as c1, d892 as c2, d904 as c3, d920 as c4, d921 as c5, d924 as c6, d922 as c7, d923 as c8, d925 as c9, d1309 as c10, d1308 as c11, d1310 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1310 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec253"]:c3(),["SharedCodec260"]:c4(),["SharedCodec261"]:c5(),["SharedCodec262"]:c6(),["SharedCodec263"]:c7(),["SharedCodec264"]:c8(),["SharedCodec265"]:c9(),["SharedCodec341"]:c10(),["SharedCodec342"]:c11(),["Webhook_order_fulfillment_package_updated_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
