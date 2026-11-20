import { d9407 as c0 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10888 as c1 } from '../descriptors/data/518.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1156 as c2 } from '../descriptors/data/58.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10832 as c4, d10833 as c5, d10834 as c6, d10835 as c7, d10836 as c8 } from '../descriptors/data/515.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10837 as c9 } from '../descriptors/data/516.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8461 as c10, d8462 as c11 } from '../descriptors/data/376.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8146 as c12, d8147 as c13 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1156 as d1156 } from '../descriptors/data/58.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec1711"]:c4(),["SharedCodec1712"]:c5(),["SharedCodec1713"]:c6(),["SharedCodec1714"]:c7(),["SharedCodec1715"]:c8(),["SharedCodec1716"]:c9(),["SharedCodec1717"]:c10(),["SharedCodec1718"]:c11(),["SharedCodec2"]:c12(),["SharedCodec3"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
