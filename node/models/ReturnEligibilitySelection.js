import { d4405 as c0, d4406 as c1 } from '../descriptors/data/192.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4408 as c2, d4409 as c3, d4410 as c4, d4411 as c5 } from '../descriptors/data/193.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4406 as d4406 } from '../descriptors/data/192.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["SharedCodec1070"]:c2(),["SharedCodec1071"]:c3(),["SharedCodec1072"]:c4(),["SharedCodec1073"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
