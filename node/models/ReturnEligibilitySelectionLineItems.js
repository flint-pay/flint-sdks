import { d4405 as c0 } from '../descriptors/data/192.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d918 as c1 } from '../descriptors/data/40.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4411 as c2 } from '../descriptors/data/193.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d918 as d918 } from '../descriptors/data/40.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelectionLineItems"]:c1(),["SharedCodec1073"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionLineItems(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
