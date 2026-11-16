import { d7858 as c0 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c1 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7625 as c2 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7625 as d7625 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3068"]:c0(),["SharedCodec3071"]:c1(),["UpdateReaderRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
