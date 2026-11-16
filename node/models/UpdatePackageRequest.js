import { d7858 as c0 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c1 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9782 as c2, d9783 as c3, d9784 as c4, d9785 as c5 } from '../descriptors/data/449.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7611 as c6 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7611 as d7611 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7611;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3068"]:c0(),["SharedCodec3071"]:c1(),["SharedCodec3131"]:c2(),["SharedCodec3132"]:c3(),["SharedCodec3133"]:c4(),["SharedCodec3134"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
