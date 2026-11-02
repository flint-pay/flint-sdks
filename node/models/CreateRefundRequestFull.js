import { d274 as c0 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6466 as c2 } from '../descriptors/data/304.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6492 as c3, d6493 as c4, d6494 as c5 } from '../descriptors/data/305.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d274 as d274 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestFull"]:c0(),["MetadataRequest"]:c1(),["RefundDestinations"]:c2(),["SharedCodec293"]:c3(),["SharedCodec294"]:c4(),["SharedCodec295"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
