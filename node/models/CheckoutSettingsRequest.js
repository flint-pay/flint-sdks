import { d10535 as c0, d10536 as c1 } from '../descriptors/data/495.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d202 as c2 } from '../descriptors/data/8.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d202 as d202 } from '../descriptors/data/8.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequest"]:c1(),["CheckoutSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
