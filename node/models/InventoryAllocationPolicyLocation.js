import { d5459 as c0 } from '../descriptors/data/245.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5459 as d5459 } from '../descriptors/data/245.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5459;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
