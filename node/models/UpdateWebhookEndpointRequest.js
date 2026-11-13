import { d6619 as c0, d6620 as c5 } from '../descriptors/data/303.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8828 as c1, d8829 as c2, d8830 as c3 } from '../descriptors/data/432.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5703 as c4 } from '../descriptors/data/252.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5703 as d5703 } from '../descriptors/data/252.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5703;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1712"]:c0(),["SharedCodec1832"]:c1(),["SharedCodec1833"]:c2(),["SharedCodec1834"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
