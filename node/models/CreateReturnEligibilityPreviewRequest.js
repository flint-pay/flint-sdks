import { d280 as c0 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5868 as c1, d5869 as c2, d5871 as c3, d5872 as c4, d5873 as c5, d5874 as c6 } from '../descriptors/data/269.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d280 as d280 } from '../descriptors/data/16.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequest"]:c1(),["ReturnEligibilitySelection"]:c2(),["SharedCodec1153"]:c3(),["SharedCodec1154"]:c4(),["SharedCodec1155"]:c5(),["SharedCodec1156"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
