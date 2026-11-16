import { d1493 as c0 } from '../descriptors/data/76.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1493 as d1493 } from '../descriptors/data/76.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialPaymentMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
