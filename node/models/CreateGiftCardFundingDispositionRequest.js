import { d214 as c0 } from '../descriptors/data/10.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d214 as d214 } from '../descriptors/data/10.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardFundingDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardFundingDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
