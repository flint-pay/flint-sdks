import { d815 as c0, d468 as c1, d814 as c2, d817 as c3, d1394 as c4, d1393 as c5, d1386 as c6, d1385 as c7, d1388 as c8, d1387 as c9, d1390 as c10, d1389 as c11, d1392 as c12, d1391 as c13, d1406 as c14, d1407 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1407 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec247"]:c3(),["SharedCodec369"]:c4(),["SharedCodec370"]:c5(),["SharedCodec371"]:c6(),["SharedCodec372"]:c7(),["SharedCodec373"]:c8(),["SharedCodec374"]:c9(),["SharedCodec375"]:c10(),["SharedCodec376"]:c11(),["SharedCodec377"]:c12(),["SharedCodec378"]:c13(),["SharedCodec380"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
