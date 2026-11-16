import { d7859 as c0, d7860 as c1, d7858 as c2 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7576 as c3 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7576 as d7576 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3066"]:c0(),["SharedCodec3067"]:c1(),["SharedCodec3068"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
