import { d5482 as c0 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5482 as d5482 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5482;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationOwnerRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationOwnerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
