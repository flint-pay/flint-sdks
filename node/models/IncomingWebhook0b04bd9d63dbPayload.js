import { d932 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d928 as c6, d922 as c7, d923 as c8, d926 as c9, d924 as c10, d925 as c11, d927 as c12, d930 as c13, d931 as c14, d929 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d932 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec260"]:c6(),["SharedCodec261"]:c7(),["SharedCodec262"]:c8(),["SharedCodec263"]:c9(),["SharedCodec264"]:c10(),["SharedCodec265"]:c11(),["SharedCodec266"]:c12(),["SharedCodec267"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
