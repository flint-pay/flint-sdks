import { d925 as c0 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4983 as c2 } from '../descriptors/data/228.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d925 as d925 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d925;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputUnverified"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1100"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputUnverified(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
