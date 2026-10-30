import { d5575 as c0 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5575 as d5575 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5575;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderInventoryRoutingSourceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
