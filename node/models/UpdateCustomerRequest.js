import { d8274 as c0, d8265 as c1, d8266 as c2, d8275 as c8, d8276 as c9 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7955 as c3, d7956 as c4 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7859 as c5, d7860 as c6, d7858 as c7 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8233 as c10, d8234 as c11, d8235 as c12 } from '../descriptors/data/360.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7581 as c13 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7581 as d7581 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7581;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1741"]:c1(),["SharedCodec1742"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3066"]:c5(),["SharedCodec3067"]:c6(),["SharedCodec3068"]:c7(),["SharedCodec3073"]:c8(),["SharedCodec3074"]:c9(),["SharedCodec3075"]:c10(),["SharedCodec3076"]:c11(),["SharedCodec3077"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
