import { d1131 as c0 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8180 as c2, d8181 as c3 } from '../descriptors/data/357.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1131 as d1131 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRemainingBalanceRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1695"]:c2(),["SharedCodec1696"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
