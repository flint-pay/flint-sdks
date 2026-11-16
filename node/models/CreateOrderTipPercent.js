import { d339 as c0 } from '../descriptors/data/19.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c3 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9205 as c4 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d339 as d339 } from '../descriptors/data/19.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTipPercent"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec221"]:c3(),["SharedCodec519"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTipPercent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
