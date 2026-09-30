import { d823 as c0, d822 as c1, d838 as c2, d839 as c3, d939 as c4, d1286 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1286 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec257"]:c2(),["SharedCodec258"]:c3(),["SharedCodec284"]:c4(),["Webhook_order_fulfillment_completed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_completed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
