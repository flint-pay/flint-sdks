import { d898 as c0, d500 as c1, d897 as c2, d917 as c3, d916 as c4, d918 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d918 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec257"]:c3(),["SharedCodec258"]:c4(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_fulfillment_hold_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
