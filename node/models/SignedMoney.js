import { d3042 as c0 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3042 as d3042 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SignedMoney"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSignedMoney(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
