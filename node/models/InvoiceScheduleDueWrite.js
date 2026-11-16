import { d9108 as c0 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9127 as c1, d9128 as c2, d9129 as c3, d9130 as c4, d9131 as c5 } from '../descriptors/data/410.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9108 as d9108 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1711"]:c1(),["SharedCodec1712"]:c2(),["SharedCodec1713"]:c3(),["SharedCodec1714"]:c4(),["SharedCodec1715"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
