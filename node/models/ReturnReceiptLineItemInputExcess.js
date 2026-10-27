import { d923 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4981 as c2 } from '../descriptors/data/228.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d923 as d923 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputExcess"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1098"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputExcess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
