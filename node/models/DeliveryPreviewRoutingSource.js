import { d440 as c0 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5575 as c1 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d440 as d440 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPreviewRoutingSource"]:c0(),["OrderInventoryRoutingSourceRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPreviewRoutingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
