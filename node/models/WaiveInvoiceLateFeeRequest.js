import { d7663 as c0 } from '../descriptors/data/324.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7663 as d7663 } from '../descriptors/data/324.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
