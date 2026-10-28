import { d922 as c0 } from '../descriptors/data/41.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4892 as c1 } from '../descriptors/data/221.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d922 as d922 } from '../descriptors/data/41.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d922;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeInclude"]:c0(),["SharedCodec1097"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeInclude(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
