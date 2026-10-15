import { d1442 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d922 as c6, d923 as c7, d1025 as c8, d1027 as c9, d1441 as c10, d1440 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1442 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc8e851ec1b62Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec261"]:c6(),["SharedCodec262"]:c7(),["SharedCodec288"]:c8(),["SharedCodec289"]:c9(),["Webhook_order_fulfillment_completed_installed_merchants"]:c10(),["Webhook_order_fulfillment_completed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
