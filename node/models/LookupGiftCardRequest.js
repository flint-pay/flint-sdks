import { d885 as c0 } from '../descriptors/data/41.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d885 as d885 } from '../descriptors/data/41.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d885;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LookupGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
