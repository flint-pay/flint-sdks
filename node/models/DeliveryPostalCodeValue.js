import { d4926 as c0 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4926 as d4926 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4926;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeValue"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeValue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
