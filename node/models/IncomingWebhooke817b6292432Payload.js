import { d1509 as c0, d893 as c1, d490 as c2, d892 as c3, d1508 as c4, d1506 as c5, d1505 as c6, d1504 as c7, d1507 as c8, d2603 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1509 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke817b6292432Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["SharedCodec375"]:c4(),["SharedCodec376"]:c5(),["SharedCodec377"]:c6(),["SharedCodec378"]:c7(),["SharedCodec379"]:c8(),["Webhook_merchant_readiness_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke817b6292432Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
