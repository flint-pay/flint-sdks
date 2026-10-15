import { d898 as c0, d500 as c1, d897 as c2, d2629 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2629 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2629;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["Webhook_payout_canceled_merchant"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payout_canceled_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
