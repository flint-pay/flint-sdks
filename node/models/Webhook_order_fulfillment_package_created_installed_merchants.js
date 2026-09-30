import { d823 as c0, d822 as c1, d838 as c2, d839 as c3, d842 as c4, d840 as c5, d841 as c6, d843 as c7, d846 as c8, d847 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d847 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d847;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec257"]:c2(),["SharedCodec258"]:c3(),["SharedCodec259"]:c4(),["SharedCodec260"]:c5(),["SharedCodec261"]:c6(),["SharedCodec262"]:c7(),["SharedCodec263"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
