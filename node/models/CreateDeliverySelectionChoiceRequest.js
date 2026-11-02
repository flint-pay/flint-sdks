import { d197 as c0 } from '../descriptors/data/9.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4650 as c1 } from '../descriptors/data/201.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d197 as d197 } from '../descriptors/data/9.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliverySelectionChoiceRequest"]:c0(),["DeliverySelectionInstructionsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionChoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
