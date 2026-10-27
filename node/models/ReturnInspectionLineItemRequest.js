import { d4964 as c0 } from '../descriptors/data/226.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4964 as d4964 } from '../descriptors/data/226.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4964;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnInspectionLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
