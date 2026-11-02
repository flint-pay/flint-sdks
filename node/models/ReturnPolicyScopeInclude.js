import { d1235 as c0 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6568 as c1 } from '../descriptors/data/310.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1235 as d1235 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeInclude"]:c0(),["SharedCodec1189"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeInclude(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
