import { d385 as c0 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9470 as c2 } from '../descriptors/data/432.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d385 as d385 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d385;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnRequest"]:c0(),["MetadataRequest"]:c1(),["ReturnLineItemRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
