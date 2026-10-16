import { d903 as c0, d902 as c1, d906 as c2, d922 as c3, d923 as c4, d926 as c5, d924 as c6, d925 as c7, d927 as c8, d1310 as c9, d1313 as c10, d1314 as c11 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1314 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec254"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec263"]:c5(),["SharedCodec264"]:c6(),["SharedCodec265"]:c7(),["SharedCodec266"]:c8(),["SharedCodec343"]:c9(),["SharedCodec344"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
