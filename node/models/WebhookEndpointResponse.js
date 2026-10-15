import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d14 as c5, d1822 as c6, d2647 as c7, d2649 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2649 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec467"]:c6(),["WebhookEndpoint"]:c7(),["WebhookEndpointResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEndpointResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
