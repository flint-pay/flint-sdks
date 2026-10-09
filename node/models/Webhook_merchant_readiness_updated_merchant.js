import { d893 as c0, d490 as c1, d892 as c2, d1508 as c3, d1506 as c4, d1505 as c5, d1504 as c6, d1507 as c7, d2603 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2603 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2603;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec375"]:c3(),["SharedCodec376"]:c4(),["SharedCodec377"]:c5(),["SharedCodec378"]:c6(),["SharedCodec379"]:c7(),["Webhook_merchant_readiness_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
