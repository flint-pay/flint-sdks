import { d171 as c0 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4016 as c1, d4018 as c2 } from '../descriptors/data/170.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d171 as d171 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAllocationPolicyRequest"]:c0(),["InventoryAllocationConfigurationValue"]:c1(),["InventoryAllocationPolicyLocation"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
