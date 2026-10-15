import { d1413 as c0, d898 as c1, d500 as c2, d897 as c3, d2595 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1413 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbd445ea5b01aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_dispute_lost_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbd445ea5b01aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
