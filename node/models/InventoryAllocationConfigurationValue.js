import { d5426 as c0 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5428 as c1 } from '../descriptors/data/244.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5426 as d5426 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationConfigurationValue"]:c0(),["InventoryAllocationPolicyLocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationConfigurationValue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
