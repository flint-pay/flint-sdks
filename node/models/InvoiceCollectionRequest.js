import { d9100 as c0, d9106 as c2, d9111 as c6, d9112 as c7, d9113 as c8, d9114 as c9, d9115 as c10, d9116 as c11 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9209 as c1 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8157 as c4, d8158 as c5 } from '../descriptors/data/356.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9117 as c12 } from '../descriptors/data/410.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9100 as d9100 } from '../descriptors/data/409.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1521"]:c4(),["SharedCodec1522"]:c5(),["SharedCodec1543"]:c6(),["SharedCodec1544"]:c7(),["SharedCodec1545"]:c8(),["SharedCodec1548"]:c9(),["SharedCodec1549"]:c10(),["SharedCodec1550"]:c11(),["SharedCodec1551"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
