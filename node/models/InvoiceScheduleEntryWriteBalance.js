import { d9107 as c0, d9108 as c1 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1143 as c2 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8175 as c4, d8176 as c5, d8177 as c6, d8178 as c7, d8179 as c8, d8180 as c9, d8181 as c10 } from '../descriptors/data/357.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9127 as c11, d9128 as c12, d9129 as c13, d9130 as c14, d9131 as c15, d9135 as c16, d9137 as c17, d9142 as c18 } from '../descriptors/data/410.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9143 as c19, d9144 as c20 } from '../descriptors/data/411.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1143 as d1143 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec1690"]:c4(),["SharedCodec1691"]:c5(),["SharedCodec1692"]:c6(),["SharedCodec1693"]:c7(),["SharedCodec1694"]:c8(),["SharedCodec1695"]:c9(),["SharedCodec1696"]:c10(),["SharedCodec1711"]:c11(),["SharedCodec1712"]:c12(),["SharedCodec1713"]:c13(),["SharedCodec1714"]:c14(),["SharedCodec1715"]:c15(),["SharedCodec1723"]:c16(),["SharedCodec1725"]:c17(),["SharedCodec1730"]:c18(),["SharedCodec1731"]:c19(),["SharedCodec1732"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
