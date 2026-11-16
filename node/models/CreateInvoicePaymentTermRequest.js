import { d310 as c0 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9087 as c1, d9089 as c2 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8132 as c4 } from '../descriptors/data/354.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8133 as c5, d8134 as c6, d8135 as c7, d8136 as c8, d8137 as c9, d8138 as c10, d8139 as c11, d8140 as c12, d8141 as c13, d8142 as c14, d8143 as c15, d8144 as c16, d8145 as c17, d8146 as c18 } from '../descriptors/data/355.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d310 as d310 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec1659"]:c8(),["SharedCodec1660"]:c9(),["SharedCodec1661"]:c10(),["SharedCodec1662"]:c11(),["SharedCodec1663"]:c12(),["SharedCodec1664"]:c13(),["SharedCodec1665"]:c14(),["SharedCodec1666"]:c15(),["SharedCodec1667"]:c16(),["SharedCodec1668"]:c17(),["SharedCodec1669"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
