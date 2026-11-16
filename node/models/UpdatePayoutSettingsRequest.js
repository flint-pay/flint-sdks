import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8883 as c1 } from '../descriptors/data/398.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10032 as c2, d10033 as c3, d10034 as c4, d10035 as c5, d10036 as c6, d10037 as c7 } from '../descriptors/data/465.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7617 as c8 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7617 as d7617 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec138"]:c1(),["SharedCodec3149"]:c2(),["SharedCodec3150"]:c3(),["SharedCodec3151"]:c4(),["SharedCodec3152"]:c5(),["SharedCodec3153"]:c6(),["SharedCodec3154"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
