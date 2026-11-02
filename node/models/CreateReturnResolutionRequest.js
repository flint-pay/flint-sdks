import { d299 as c0 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1254 as c3, d1255 as c4, d1258 as c5 } from '../descriptors/data/59.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6596 as c6, d6597 as c7, d6598 as c8, d6599 as c9, d6600 as c10, d6604 as c11, d6605 as c12, d6606 as c13 } from '../descriptors/data/312.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6612 as c14, d6613 as c15, d6614 as c16 } from '../descriptors/data/313.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6742 as c17 } from '../descriptors/data/320.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d2164 as c18 } from '../descriptors/data/92.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d2175 as c19 } from '../descriptors/data/93.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5888 as c20 } from '../descriptors/data/270.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4602 as c21 } from '../descriptors/data/198.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d299 as d299 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["ReturnResolutionAdjustmentRequest"]:c4(),["ReturnResolutionLineItemRequest"]:c5(),["SharedCodec1204"]:c6(),["SharedCodec1205"]:c7(),["SharedCodec1206"]:c8(),["SharedCodec1207"]:c9(),["SharedCodec1208"]:c10(),["SharedCodec1209"]:c11(),["SharedCodec1210"]:c12(),["SharedCodec1211"]:c13(),["SharedCodec306"]:c14(),["SharedCodec308"]:c15(),["SharedCodec309"]:c16(),["SharedCodec310"]:c17(),["SharedCodec311"]:c18(),["SharedCodec312"]:c19(),["SharedCodec37"]:c20(),["SharedCodec85"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
