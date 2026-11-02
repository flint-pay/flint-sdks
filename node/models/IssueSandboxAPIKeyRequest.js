import { d866 as c0 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4351 as c1 } from '../descriptors/data/184.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6793 as c3, d6794 as c4, d6795 as c5 } from '../descriptors/data/323.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d866 as d866 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequest"]:c0(),["SharedCodec128"]:c1(),["SharedCodec3"]:c2(),["SharedCodec847"]:c3(),["SharedCodec848"]:c4(),["SharedCodec849"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
