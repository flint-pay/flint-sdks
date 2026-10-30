import { d431 as c0 } from '../descriptors/data/23.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4968 as c1, d4969 as c2 } from '../descriptors/data/219.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d431 as d431 } from '../descriptors/data/23.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputFixedLocation"]:c0(),["SharedCodec179"]:c1(),["SharedCodec180"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
