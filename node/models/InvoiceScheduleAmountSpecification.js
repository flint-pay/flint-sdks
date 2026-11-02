import { d4743 as c0 } from '../descriptors/data/207.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4748 as c2, d4749 as c3, d4750 as c4, d4751 as c5, d4752 as c6, d4753 as c7, d4754 as c8 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4743 as d4743 } from '../descriptors/data/207.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["MoneyValue"]:c1(),["SharedCodec805"]:c2(),["SharedCodec806"]:c3(),["SharedCodec807"]:c4(),["SharedCodec808"]:c5(),["SharedCodec809"]:c6(),["SharedCodec810"]:c7(),["SharedCodec811"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
