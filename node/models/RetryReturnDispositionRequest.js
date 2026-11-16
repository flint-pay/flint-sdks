import { d1722 as c0 } from '../descriptors/data/85.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1722 as d1722 } from '../descriptors/data/85.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RetryReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
