import { d7858 as c0 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c1 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7636 as c2 } from '../descriptors/data/322.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7636 as d7636 } from '../descriptors/data/322.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7636;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3068"]:c0(),["SharedCodec3071"]:c1(),["UpdateReturnRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
