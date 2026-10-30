import { d4150 as c0 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4150 as d4150 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4150;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateDeliveryFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
