import { d8606 as c0 } from '../descriptors/data/380.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8606 as d8606 } from '../descriptors/data/380.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8606;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WebhookSigningMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookSigningMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
