import { d420 as c0 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10783 as c1 } from '../descriptors/data/509.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d420 as d420 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxRegistrationRequest"]:c0(),["SharedCodec610"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
