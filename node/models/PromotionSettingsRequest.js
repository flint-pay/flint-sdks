import { d1634 as c0 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1634 as d1634 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1634;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
