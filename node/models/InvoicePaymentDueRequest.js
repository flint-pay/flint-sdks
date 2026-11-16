import { d9105 as c0 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8160 as c1, d8161 as c2, d8163 as c3, d8165 as c4 } from '../descriptors/data/356.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9120 as c5, d9121 as c6, d9122 as c7, d9123 as c8, d9124 as c9, d9125 as c10, d9126 as c11 } from '../descriptors/data/410.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9105 as d9105 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1635"]:c1(),["SharedCodec1636"]:c2(),["SharedCodec1638"]:c3(),["SharedCodec1640"]:c4(),["SharedCodec1643"]:c5(),["SharedCodec1644"]:c6(),["SharedCodec1651"]:c7(),["SharedCodec1652"]:c8(),["SharedCodec1653"]:c9(),["SharedCodec1654"]:c10(),["SharedCodec1655"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
