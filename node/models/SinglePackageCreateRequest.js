import { d8496 as c0, d8497 as c6 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8784 as c2, d8785 as c3 } from '../descriptors/data/392.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8826 as c4, d8822 as c5 } from '../descriptors/data/395.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8822 as d8822 } from '../descriptors/data/395.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec2818"]:c2(),["SharedCodec2819"]:c3(),["SharedCodec521"]:c4(),["SinglePackageCreateRequest"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
