import { d1623 as c0 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9436 as c1 } from '../descriptors/data/430.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1623 as d1623 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1623;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnceRequest"]:c0(),["SharedCodec2425"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
