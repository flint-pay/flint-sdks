import { d9089 as c0 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8136 as c1, d8137 as c2, d8138 as c3, d8139 as c4, d8140 as c5, d8141 as c6, d8142 as c7, d8143 as c8, d8144 as c9, d8145 as c10, d8146 as c11 } from '../descriptors/data/355.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9089 as d9089 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9089;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1659"]:c1(),["SharedCodec1660"]:c2(),["SharedCodec1661"]:c3(),["SharedCodec1662"]:c4(),["SharedCodec1663"]:c5(),["SharedCodec1664"]:c6(),["SharedCodec1665"]:c7(),["SharedCodec1666"]:c8(),["SharedCodec1667"]:c9(),["SharedCodec1668"]:c10(),["SharedCodec1669"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
