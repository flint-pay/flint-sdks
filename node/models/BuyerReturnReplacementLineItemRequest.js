import { d4294 as c0 } from '../descriptors/data/187.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4377 as c1, d4378 as c2, d4379 as c3 } from '../descriptors/data/191.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4380 as c4 } from '../descriptors/data/192.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4294 as d4294 } from '../descriptors/data/187.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemRequest"]:c0(),["SharedCodec29"]:c1(),["SharedCodec30"]:c2(),["SharedCodec31"]:c3(),["SharedCodec32"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
