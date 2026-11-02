import { d4759 as c0 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6856 as c1 } from '../descriptors/data/325.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d858 as c2 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4508 as c4, d4509 as c5 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6831 as c6, d6832 as c7, d6833 as c8, d6834 as c9, d6835 as c10, d6836 as c11 } from '../descriptors/data/324.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4821 as c12, d4822 as c13 } from '../descriptors/data/211.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d858 as d858 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d858;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimit"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec835"]:c6(),["SharedCodec836"]:c7(),["SharedCodec837"]:c8(),["SharedCodec838"]:c9(),["SharedCodec839"]:c10(),["SharedCodec840"]:c11(),["SharedCodec841"]:c12(),["SharedCodec842"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
