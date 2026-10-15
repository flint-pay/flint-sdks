import { d898 as c0, d323 as c1, d500 as c2, d897 as c3, d952 as c4, d953 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d953 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["SharedCodec273"]:c4(),["Webhook_invoice_payment_attempt_canceled_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_attempt_canceled_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
