import { d10378 as c0, d10379 as c2, d10380 as c3, d10381 as c4, d10382 as c5, d10383 as c6, d10384 as c7 } from '../descriptors/data/486.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10394 as c1 } from '../descriptors/data/487.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10378 as d10378 } from '../descriptors/data/486.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2741"]:c2(),["SharedCodec2742"]:c3(),["SharedCodec2743"]:c4(),["SharedCodec2748"]:c5(),["SharedCodec2749"]:c6(),["SharedCodec2750"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
