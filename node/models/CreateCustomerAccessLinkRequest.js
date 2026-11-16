import { d251 as c0 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8253 as c1 } from '../descriptors/data/361.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d251 as d251 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerAccessLinkRequest"]:c0(),["SharedCodec382"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
