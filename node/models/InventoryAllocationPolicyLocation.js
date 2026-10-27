import { d4018 as c0 } from '../descriptors/data/170.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4018 as d4018 } from '../descriptors/data/170.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4018;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
