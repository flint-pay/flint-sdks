import { d398 as c0 } from '../descriptors/data/24.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7809 as c1, d7810 as c4, d7811 as c5 } from '../descriptors/data/335.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7785 as c2 } from '../descriptors/data/334.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10530 as c3, d10531 as c6, d10532 as c7 } from '../descriptors/data/495.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d398 as d398 } from '../descriptors/data/24.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec352"]:c1(),["SharedCodec5"]:c2(),["SharedCodec584"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["SharedCodec587"]:c6(),["SharedCodec588"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
