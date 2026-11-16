import { d291 as c0 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8892 as c1 } from '../descriptors/data/399.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d291 as d291 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardNotificationRequest"]:c0(),["GiftCardNotificationRecipient"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardNotificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
