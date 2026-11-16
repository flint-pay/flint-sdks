import { d9209 as c0 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10598 as c1 } from '../descriptors/data/498.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1148 as c2 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10543 as c4, d10544 as c5, d10545 as c6, d10546 as c7, d10547 as c8 } from '../descriptors/data/495.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10548 as c9 } from '../descriptors/data/496.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8265 as c10, d8266 as c11 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7955 as c12, d7956 as c13 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1148 as d1148 } from '../descriptors/data/57.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec1735"]:c4(),["SharedCodec1736"]:c5(),["SharedCodec1737"]:c6(),["SharedCodec1738"]:c7(),["SharedCodec1739"]:c8(),["SharedCodec1740"]:c9(),["SharedCodec1741"]:c10(),["SharedCodec1742"]:c11(),["SharedCodec2"]:c12(),["SharedCodec3"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
