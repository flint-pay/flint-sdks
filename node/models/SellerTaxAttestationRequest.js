import { d10769 as c0 } from '../descriptors/data/509.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10769 as d10769 } from '../descriptors/data/509.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10769;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SellerTaxAttestationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSellerTaxAttestationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
