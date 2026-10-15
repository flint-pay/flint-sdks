import { d971 as c0, d898 as c1, d500 as c2, d897 as c3, d2608 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d971 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d971;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1824a72a4c81Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_inventory_reservation_consumed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1824a72a4c81Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
