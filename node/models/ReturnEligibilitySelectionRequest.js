import { d7501 as c0, d7503 as c1, d7507 as c2, d7509 as c3, d7510 as c4, d7511 as c5 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7503 as d7503 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7503;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionRequest"]:c1(),["SharedCodec1456"]:c2(),["SharedCodec1458"]:c3(),["SharedCodec1459"]:c4(),["SharedCodec1460"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
