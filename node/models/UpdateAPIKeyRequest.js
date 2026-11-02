import { d4351 as c0, d4338 as c1, d4354 as c2, d4339 as c3, d4340 as c4, d4352 as c6, d4353 as c7 } from '../descriptors/data/184.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4300 as c5 } from '../descriptors/data/181.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4141 as c8 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4141 as d4141 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec128"]:c0(),["SharedCodec1344"]:c1(),["SharedCodec1345"]:c2(),["SharedCodec1346"]:c3(),["SharedCodec1347"]:c4(),["SharedCodec3"]:c5(),["SharedCodec318"]:c6(),["SharedCodec319"]:c7(),["UpdateAPIKeyRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
