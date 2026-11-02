import { d1243 as c0 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6633 as c1 } from '../descriptors/data/314.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6686 as c2 } from '../descriptors/data/318.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1243 as d1243 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1243;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputUnverified"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1194"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputUnverified(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
