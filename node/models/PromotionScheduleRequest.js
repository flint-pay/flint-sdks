import { d10159 as c0 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10159 as d10159 } from '../descriptors/data/472.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionScheduleRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionScheduleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
