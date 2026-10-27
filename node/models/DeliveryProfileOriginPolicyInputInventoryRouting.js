import { d316 as c0 } from '../descriptors/data/18.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3654 as c1 } from '../descriptors/data/150.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d316 as d316 } from '../descriptors/data/18.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyInputInventoryRouting"]:c0(),["SharedCodec304"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyInputInventoryRouting(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
