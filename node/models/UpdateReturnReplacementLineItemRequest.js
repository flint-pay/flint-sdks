import { d4281 as c0 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6596 as c1, d6597 as c2, d6598 as c3, d6599 as c4, d6600 as c5 } from '../descriptors/data/312.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6634 as c6, d6635 as c7, d6636 as c8 } from '../descriptors/data/314.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4602 as c9 } from '../descriptors/data/198.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4204 as c10 } from '../descriptors/data/175.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4204 as d4204 } from '../descriptors/data/175.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1204"]:c1(),["SharedCodec1205"]:c2(),["SharedCodec1206"]:c3(),["SharedCodec1207"]:c4(),["SharedCodec1208"]:c5(),["SharedCodec1425"]:c6(),["SharedCodec1426"]:c7(),["SharedCodec1427"]:c8(),["SharedCodec85"]:c9(),["UpdateReturnReplacementLineItemRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
