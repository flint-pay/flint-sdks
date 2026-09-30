import { d823 as c0, d822 as c1, d826 as c2, d838 as c3, d839 as c4, d842 as c5, d840 as c6, d841 as c7, d843 as c8, d1162 as c9, d1165 as c10, d1166 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1166 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1166;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec251"]:c2(),["SharedCodec257"]:c3(),["SharedCodec258"]:c4(),["SharedCodec259"]:c5(),["SharedCodec260"]:c6(),["SharedCodec261"]:c7(),["SharedCodec262"]:c8(),["SharedCodec320"]:c9(),["SharedCodec321"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
