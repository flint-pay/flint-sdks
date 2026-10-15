import { d1315 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d906 as c6, d922 as c7, d923 as c8, d926 as c9, d924 as c10, d925 as c11, d927 as c12, d1311 as c13, d1310 as c14, d1313 as c15, d1314 as c16, d1312 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1315 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec254"]:c6(),["SharedCodec261"]:c7(),["SharedCodec262"]:c8(),["SharedCodec263"]:c9(),["SharedCodec264"]:c10(),["SharedCodec265"]:c11(),["SharedCodec266"]:c12(),["SharedCodec342"]:c13(),["SharedCodec343"]:c14(),["SharedCodec344"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
