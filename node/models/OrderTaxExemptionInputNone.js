import { d1059 as c0 } from '../descriptors/data/52.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7245 as c1, d7246 as c2, d7247 as c3 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1059 as d1059 } from '../descriptors/data/52.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputNone"]:c0(),["SharedCodec1099"]:c1(),["SharedCodec1100"]:c2(),["SharedCodec1101"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
