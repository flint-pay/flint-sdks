import { d1110 as c0 } from '../descriptors/data/56.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8137 as c1, d8138 as c2 } from '../descriptors/data/355.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1110 as d1110 } from '../descriptors/data/56.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1110;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceiptRequest"]:c0(),["SharedCodec1660"]:c1(),["SharedCodec1661"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
