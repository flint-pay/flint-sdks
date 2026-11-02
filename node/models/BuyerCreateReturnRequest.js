import { d41 as c0 } from '../descriptors/data/1.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1230 as c1 } from '../descriptors/data/57.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d41 as d41 } from '../descriptors/data/1.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d41;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
