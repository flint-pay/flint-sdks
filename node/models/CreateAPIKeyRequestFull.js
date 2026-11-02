import { d161 as c0 } from '../descriptors/data/6.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4351 as c1 } from '../descriptors/data/184.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d161 as d161 } from '../descriptors/data/6.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestFull"]:c0(),["SharedCodec128"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
