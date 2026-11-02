import { d296 as c0 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1254 as c2, d1255 as c3, d1258 as c4 } from '../descriptors/data/59.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6596 as c5, d6597 as c6, d6598 as c7, d6599 as c8, d6600 as c9, d6604 as c10, d6605 as c11, d6606 as c12 } from '../descriptors/data/312.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d2101 as c13, d2122 as c15 } from '../descriptors/data/90.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6612 as c14, d6613 as c16, d6614 as c17 } from '../descriptors/data/313.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5888 as c18 } from '../descriptors/data/270.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4602 as c19 } from '../descriptors/data/198.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d296 as d296 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1204"]:c5(),["SharedCodec1205"]:c6(),["SharedCodec1206"]:c7(),["SharedCodec1207"]:c8(),["SharedCodec1208"]:c9(),["SharedCodec1209"]:c10(),["SharedCodec1210"]:c11(),["SharedCodec1211"]:c12(),["SharedCodec305"]:c13(),["SharedCodec306"]:c14(),["SharedCodec307"]:c15(),["SharedCodec308"]:c16(),["SharedCodec309"]:c17(),["SharedCodec37"]:c18(),["SharedCodec85"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
