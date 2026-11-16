import { d9089 as c0, d9090 as c17, d9091 as c18 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8132 as c2 } from '../descriptors/data/354.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8133 as c3, d8134 as c4, d8135 as c5, d8136 as c6, d8137 as c7, d8138 as c8, d8139 as c9, d8140 as c10, d8141 as c11, d8142 as c12, d8143 as c13, d8144 as c14, d8145 as c15, d8146 as c16 } from '../descriptors/data/355.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7598 as c19 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7598 as d7598 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7598;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec120"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec1659"]:c6(),["SharedCodec1660"]:c7(),["SharedCodec1661"]:c8(),["SharedCodec1662"]:c9(),["SharedCodec1663"]:c10(),["SharedCodec1664"]:c11(),["SharedCodec1665"]:c12(),["SharedCodec1666"]:c13(),["SharedCodec1667"]:c14(),["SharedCodec1668"]:c15(),["SharedCodec1669"]:c16(),["SharedCodec3100"]:c17(),["SharedCodec3101"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
