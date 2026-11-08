import { d233 as c0 } from '../descriptors/data/12.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5457 as c1 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5459 as c2 } from '../descriptors/data/245.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d233 as d233 } from '../descriptors/data/12.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAllocationPolicyRequest"]:c0(),["InventoryAllocationConfigurationValue"]:c1(),["InventoryAllocationPolicyLocation"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
