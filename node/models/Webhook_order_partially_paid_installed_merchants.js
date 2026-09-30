import { d823 as c0, d817 as c1, d822 as c2, d1394 as c3, d1393 as c4, d1386 as c5, d1385 as c6, d1388 as c7, d1387 as c8, d1390 as c9, d1389 as c10, d1392 as c11, d1391 as c12, d1397 as c13, d1398 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1398 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec247"]:c1(),["SharedCodec249"]:c2(),["SharedCodec369"]:c3(),["SharedCodec370"]:c4(),["SharedCodec371"]:c5(),["SharedCodec372"]:c6(),["SharedCodec373"]:c7(),["SharedCodec374"]:c8(),["SharedCodec375"]:c9(),["SharedCodec376"]:c10(),["SharedCodec377"]:c11(),["SharedCodec378"]:c12(),["SharedCodec379"]:c13(),["Webhook_order_partially_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
