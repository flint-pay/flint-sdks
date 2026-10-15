import { d898 as c0, d500 as c1, d897 as c2, d906 as c3, d922 as c4, d923 as c5, d926 as c6, d924 as c7, d925 as c8, d927 as c9, d1311 as c10, d1310 as c11, d1312 as c12 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1312 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec254"]:c3(),["SharedCodec261"]:c4(),["SharedCodec262"]:c5(),["SharedCodec263"]:c6(),["SharedCodec264"]:c7(),["SharedCodec265"]:c8(),["SharedCodec266"]:c9(),["SharedCodec342"]:c10(),["SharedCodec343"]:c11(),["Webhook_order_fulfillment_package_updated_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
