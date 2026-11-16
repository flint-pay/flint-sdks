import { d8267 as c0 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9179 as c1 } from '../descriptors/data/412.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9187 as c2, d9188 as c3, d9189 as c4, d9190 as c5, d9191 as c6, d9192 as c7, d9193 as c8 } from '../descriptors/data/413.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8102 as c9, d8103 as c10, d8104 as c11, d8105 as c12 } from '../descriptors/data/353.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9179 as d9179 } from '../descriptors/data/412.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9179;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1955"]:c2(),["SharedCodec1956"]:c3(),["SharedCodec1957"]:c4(),["SharedCodec1958"]:c5(),["SharedCodec1962"]:c6(),["SharedCodec1963"]:c7(),["SharedCodec1964"]:c8(),["SharedCodec699"]:c9(),["SharedCodec700"]:c10(),["SharedCodec701"]:c11(),["SharedCodec702"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
