import { d7403 as c0 } from '../descriptors/data/309.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7403 as d7403 } from '../descriptors/data/309.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryDestinationInputCustomerAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationInputCustomerAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
