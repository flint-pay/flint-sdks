import { d1511 as c0, d898 as c1, d500 as c2, d897 as c3, d1510 as c4, d1508 as c5, d1507 as c6, d1506 as c7, d1509 as c8, d2619 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1511 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke817b6292432Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["SharedCodec376"]:c4(),["SharedCodec377"]:c5(),["SharedCodec378"]:c6(),["SharedCodec379"]:c7(),["SharedCodec380"]:c8(),["Webhook_merchant_readiness_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke817b6292432Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
