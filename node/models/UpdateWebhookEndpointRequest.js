import { d8605 as c0, d8606 as c5 } from '../descriptors/data/380.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10815 as c1, d10816 as c2, d10817 as c3 } from '../descriptors/data/511.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7655 as c4 } from '../descriptors/data/324.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7655 as d7655 } from '../descriptors/data/324.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3085"]:c0(),["SharedCodec3205"]:c1(),["SharedCodec3206"]:c2(),["SharedCodec3207"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
