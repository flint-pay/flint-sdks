import { d901 as c0, d900 as c1, d920 as c2, d921 as c3, d924 as c4, d922 as c5, d923 as c6, d925 as c7, d928 as c8, d929 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d929 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec260"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec263"]:c5(),["SharedCodec264"]:c6(),["SharedCodec265"]:c7(),["SharedCodec266"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
