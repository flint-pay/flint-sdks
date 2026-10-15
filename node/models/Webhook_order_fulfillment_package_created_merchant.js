import { d898 as c0, d500 as c1, d897 as c2, d928 as c3, d922 as c4, d923 as c5, d926 as c6, d924 as c7, d925 as c8, d927 as c9, d929 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d929 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec260"]:c3(),["SharedCodec261"]:c4(),["SharedCodec262"]:c5(),["SharedCodec263"]:c6(),["SharedCodec264"]:c7(),["SharedCodec265"]:c8(),["SharedCodec266"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
