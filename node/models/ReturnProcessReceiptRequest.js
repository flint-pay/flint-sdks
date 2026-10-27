import { d4970 as c0 } from '../descriptors/data/227.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4862 as c1, d4864 as c2, d4865 as c3, d4866 as c4 } from '../descriptors/data/219.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4011 as c5 } from '../descriptors/data/170.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4970 as d4970 } from '../descriptors/data/227.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4970;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessReceiptRequest"]:c0(),["ReturnSourceSystem"]:c1(),["SharedCodec1075"]:c2(),["SharedCodec1076"]:c3(),["SharedCodec1077"]:c4(),["SharedCodec150"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
