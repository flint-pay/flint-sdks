import { d1178 as c0 } from '../descriptors/data/55.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1178 as d1178 } from '../descriptors/data/55.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveDiscountsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveDiscountsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
