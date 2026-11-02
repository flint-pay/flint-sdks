import { d634 as c0 } from '../descriptors/data/33.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5308 as c1, d5314 as c2 } from '../descriptors/data/238.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d634 as d634 } from '../descriptors/data/33.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d634;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImport"]:c0(),["SharedCodec204"]:c1(),["SharedCodec210"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
