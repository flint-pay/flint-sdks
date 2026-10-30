import { d6673 as c0 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6673 as d6673 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessInspectionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
