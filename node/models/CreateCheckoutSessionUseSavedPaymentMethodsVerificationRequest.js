import { d7894 as c0, d7895 as c1 } from '../descriptors/data/341.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d247 as c2 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d247 as d247 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
