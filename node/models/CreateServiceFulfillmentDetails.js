import { d6010 as c0 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6010 as d6010 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateServiceFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateServiceFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
