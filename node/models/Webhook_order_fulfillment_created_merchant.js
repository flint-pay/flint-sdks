import { d815 as c0, d468 as c1, d814 as c2, d838 as c3, d839 as c4, d937 as c5, d1211 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1211 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec257"]:c3(),["SharedCodec258"]:c4(),["SharedCodec283"]:c5(),["Webhook_order_fulfillment_created_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
