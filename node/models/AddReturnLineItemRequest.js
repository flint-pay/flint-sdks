import { d7 as c0 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4422 as c1 } from '../descriptors/data/193.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d7 as d7 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddReturnLineItemRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
