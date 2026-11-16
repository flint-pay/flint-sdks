import { d10551 as c0, d10552 as c1 } from '../descriptors/data/496.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7544 as c2 } from '../descriptors/data/316.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7544 as d7544 } from '../descriptors/data/316.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3026"]:c0(),["SharedCodec3027"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
