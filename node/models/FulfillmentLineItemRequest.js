import { d8776 as c0 } from '../descriptors/data/391.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8776 as d8776 } from '../descriptors/data/391.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8776;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
