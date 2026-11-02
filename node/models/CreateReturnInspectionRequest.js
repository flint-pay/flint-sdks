import { d281 as c0 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1226 as c1 } from '../descriptors/data/57.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6676 as c2 } from '../descriptors/data/317.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6541 as c3, d6542 as c4, d6543 as c5 } from '../descriptors/data/308.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5419 as c6 } from '../descriptors/data/243.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d281 as d281 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["SharedCodec1159"]:c3(),["SharedCodec1160"]:c4(),["SharedCodec1161"]:c5(),["SharedCodec231"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
