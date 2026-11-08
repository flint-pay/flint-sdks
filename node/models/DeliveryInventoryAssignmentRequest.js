import { d409 as c0 } from '../descriptors/data/22.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d409 as d409 } from '../descriptors/data/22.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInventoryAssignmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInventoryAssignmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
