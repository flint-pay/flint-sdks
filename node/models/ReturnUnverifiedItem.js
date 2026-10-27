import { d4942 as c0 } from '../descriptors/data/225.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4942 as d4942 } from '../descriptors/data/225.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4942;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnUnverifiedItem"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
