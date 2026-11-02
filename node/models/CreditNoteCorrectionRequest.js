import { d4761 as c0, d4763 as c2, d4764 as c3, d4765 as c4, d4766 as c5 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4761 as d4761 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec339"]:c2(),["SharedCodec340"]:c3(),["SharedCodec341"]:c4(),["SharedCodec342"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
