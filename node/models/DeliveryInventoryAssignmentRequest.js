import { d404 as c0 } from '../descriptors/data/22.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d404 as d404 } from '../descriptors/data/22.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInventoryAssignmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInventoryAssignmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
