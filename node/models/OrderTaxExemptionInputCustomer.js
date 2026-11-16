import { d1332 as c0 } from '../descriptors/data/66.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9187 as c1, d9188 as c2, d9189 as c3 } from '../descriptors/data/413.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1332 as d1332 } from '../descriptors/data/66.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputCustomer"]:c0(),["SharedCodec1955"]:c1(),["SharedCodec1956"]:c2(),["SharedCodec1957"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
