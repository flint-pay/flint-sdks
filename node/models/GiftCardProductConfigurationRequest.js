import { d6361 as c0, d6363 as c1 } from '../descriptors/data/298.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4547 as c2 } from '../descriptors/data/195.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6363 as d6363 } from '../descriptors/data/298.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6363;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["SharedCodec602"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardProductConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
