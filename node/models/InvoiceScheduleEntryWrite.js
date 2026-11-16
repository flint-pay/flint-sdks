import { d9107 as c0, d9108 as c1, d9109 as c2 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8175 as c4, d8176 as c5, d8177 as c6, d8178 as c7, d8179 as c8, d8180 as c9, d8181 as c10 } from '../descriptors/data/357.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9127 as c11, d9128 as c12, d9129 as c13, d9130 as c14, d9131 as c15, d9132 as c16, d9133 as c17, d9134 as c18, d9135 as c19, d9136 as c20, d9137 as c21, d9138 as c22, d9139 as c23, d9140 as c24, d9141 as c25, d9142 as c26 } from '../descriptors/data/410.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9143 as c27, d9144 as c28 } from '../descriptors/data/411.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9109 as d9109 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1690"]:c4(),["SharedCodec1691"]:c5(),["SharedCodec1692"]:c6(),["SharedCodec1693"]:c7(),["SharedCodec1694"]:c8(),["SharedCodec1695"]:c9(),["SharedCodec1696"]:c10(),["SharedCodec1711"]:c11(),["SharedCodec1712"]:c12(),["SharedCodec1713"]:c13(),["SharedCodec1714"]:c14(),["SharedCodec1715"]:c15(),["SharedCodec1720"]:c16(),["SharedCodec1721"]:c17(),["SharedCodec1722"]:c18(),["SharedCodec1723"]:c19(),["SharedCodec1724"]:c20(),["SharedCodec1725"]:c21(),["SharedCodec1726"]:c22(),["SharedCodec1727"]:c23(),["SharedCodec1728"]:c24(),["SharedCodec1729"]:c25(),["SharedCodec1730"]:c26(),["SharedCodec1731"]:c27(),["SharedCodec1732"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
