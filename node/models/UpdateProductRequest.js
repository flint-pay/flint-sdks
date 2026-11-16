import { d7867 as c0, d7868 as c1, d7859 as c3, d7860 as c4, d7858 as c5 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c2, d7879 as c6 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10100 as c7, d10101 as c8 } from '../descriptors/data/469.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10119 as c9, d10120 as c10 } from '../descriptors/data/470.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7621 as c11 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7621 as d7621 } from '../descriptors/data/321.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7621;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec3066"]:c3(),["SharedCodec3067"]:c4(),["SharedCodec3068"]:c5(),["SharedCodec3070"]:c6(),["SharedCodec3157"]:c7(),["SharedCodec3158"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
