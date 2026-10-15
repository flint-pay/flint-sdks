import { d898 as c0, d500 as c1, d897 as c2, d922 as c3, d923 as c4, d1025 as c5, d1361 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1361 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec288"]:c5(),["Webhook_order_fulfillment_created_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
