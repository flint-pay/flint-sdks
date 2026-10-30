import { d683 as c0 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5453 as c1, d5454 as c2 } from '../descriptors/data/245.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d683 as d683 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequest"]:c0(),["SharedCodec637"]:c1(),["SharedCodec638"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
