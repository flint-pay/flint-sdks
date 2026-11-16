import { d9934 as c0 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9934 as d9934 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9934;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkPaymentConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkPaymentConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
