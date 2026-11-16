import { d383 as c0 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10378 as c1, d10379 as c7, d10380 as c8, d10381 as c9, d10382 as c10, d10383 as c11, d10384 as c12 } from '../descriptors/data/486.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10288 as c2, d10291 as c4, d10292 as c5, d10293 as c6 } from '../descriptors/data/480.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10394 as c3 } from '../descriptors/data/487.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8961 as c13 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d383 as d383 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2661"]:c4(),["SharedCodec2662"]:c5(),["SharedCodec2663"]:c6(),["SharedCodec2741"]:c7(),["SharedCodec2742"]:c8(),["SharedCodec2743"]:c9(),["SharedCodec2748"]:c10(),["SharedCodec2749"]:c11(),["SharedCodec2750"]:c12(),["SharedCodec465"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
