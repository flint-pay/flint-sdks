import { d9928 as c0 } from '../descriptors/data/457.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9928 as d9928 } from '../descriptors/data/457.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9928;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
