import { d815 as c0, d468 as c1, d814 as c2, d844 as c3, d838 as c4, d839 as c5, d842 as c6, d840 as c7, d841 as c8, d843 as c9, d845 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d845 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d845;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec256"]:c3(),["SharedCodec257"]:c4(),["SharedCodec258"]:c5(),["SharedCodec259"]:c6(),["SharedCodec260"]:c7(),["SharedCodec261"]:c8(),["SharedCodec262"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
