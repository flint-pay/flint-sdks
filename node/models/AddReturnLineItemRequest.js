import { d7 as c0 } from '../descriptors/data/0.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4422 as c1 } from '../descriptors/data/193.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d7 as d7 } from '../descriptors/data/0.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddReturnLineItemRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
