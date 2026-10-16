import { d903 as c0, d902 as c1, d922 as c2, d923 as c3, d926 as c4, d924 as c5, d925 as c6, d927 as c7, d930 as c8, d931 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d931 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d931;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec261"]:c2(),["SharedCodec262"]:c3(),["SharedCodec263"]:c4(),["SharedCodec264"]:c5(),["SharedCodec265"]:c6(),["SharedCodec266"]:c7(),["SharedCodec267"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
