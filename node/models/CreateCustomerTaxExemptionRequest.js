import { d255 as c0 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8267 as c1 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c2 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8102 as c3, d8103 as c4, d8104 as c5, d8105 as c6 } from '../descriptors/data/353.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d255 as d255 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerTaxExemptionRequest"]:c0(),["CustomerTaxExemptionCoverageRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec699"]:c3(),["SharedCodec700"]:c4(),["SharedCodec701"]:c5(),["SharedCodec702"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
