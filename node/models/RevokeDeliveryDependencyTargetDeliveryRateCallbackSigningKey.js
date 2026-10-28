import { d935 as c0 } from '../descriptors/data/42.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3699 as c1, d3700 as c2 } from '../descriptors/data/153.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d935 as d935 } from '../descriptors/data/42.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey"]:c0(),["SharedCodec1118"]:c1(),["SharedCodec1119"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
