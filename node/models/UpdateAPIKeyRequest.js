import { d7795 as c0, d7796 as c1, d7785 as c3 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7809 as c2, d7810 as c4, d7811 as c5 } from '../descriptors/data/335.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7574 as c6 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7574 as d7574 } from '../descriptors/data/317.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3064"]:c0(),["SharedCodec3065"]:c1(),["SharedCodec352"]:c2(),["SharedCodec5"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
