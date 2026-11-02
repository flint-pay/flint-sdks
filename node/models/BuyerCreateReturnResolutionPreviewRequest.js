import { d42 as c0 } from '../descriptors/data/1.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d75 as c1 } from '../descriptors/data/3.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1258 as c2 } from '../descriptors/data/59.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5888 as c3 } from '../descriptors/data/270.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5824 as c4, d5825 as c5, d5826 as c6, d5827 as c7 } from '../descriptors/data/267.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d42 as d42 } from '../descriptors/data/1.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnResolutionPreviewRequest"]:c0(),["BuyerReturnReplacementLineItemRequest"]:c1(),["ReturnResolutionLineItemRequest"]:c2(),["SharedCodec37"]:c3(),["SharedCodec72"]:c4(),["SharedCodec73"]:c5(),["SharedCodec74"]:c6(),["SharedCodec75"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
