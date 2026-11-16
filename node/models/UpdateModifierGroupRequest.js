import { d7857 as c0, d7859 as c3, d7860 as c4, d7858 as c5 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9560 as c1, d9562 as c6 } from '../descriptors/data/437.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9552 as c7, d9553 as c8 } from '../descriptors/data/436.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7606 as c9 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7606 as d7606 } from '../descriptors/data/319.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7606;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec3066"]:c3(),["SharedCodec3067"]:c4(),["SharedCodec3068"]:c5(),["SharedCodec3112"]:c6(),["SharedCodec3120"]:c7(),["SharedCodec3121"]:c8(),["UpdateModifierGroupRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
