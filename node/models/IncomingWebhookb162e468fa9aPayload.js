import { d1388 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d906 as c6, d922 as c7, d923 as c8, d927 as c9, d1384 as c10, d1383 as c11, d1386 as c12, d1387 as c13, d1385 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1388 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec254"]:c6(),["SharedCodec261"]:c7(),["SharedCodec262"]:c8(),["SharedCodec266"]:c9(),["SharedCodec361"]:c10(),["SharedCodec362"]:c11(),["SharedCodec363"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
