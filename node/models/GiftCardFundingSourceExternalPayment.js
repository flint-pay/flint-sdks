import { d629 as c0 } from '../descriptors/data/32.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5307 as c1, d5308 as c2 } from '../descriptors/data/238.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d629 as d629 } from '../descriptors/data/32.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d629;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPayment"]:c0(),["SharedCodec203"]:c1(),["SharedCodec204"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPayment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
