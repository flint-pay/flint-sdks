import { d923 as c0 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4981 as c2 } from '../descriptors/data/228.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d923 as d923 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputExcess"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1098"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputExcess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
