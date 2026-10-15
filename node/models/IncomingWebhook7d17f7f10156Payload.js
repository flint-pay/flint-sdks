import { d1255 as c0, d898 as c1, d500 as c2, d897 as c3, d2632 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1255 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7d17f7f10156Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_payout_destination_deleted_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7d17f7f10156Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
