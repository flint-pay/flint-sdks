import { d901 as c0 } from '../descriptors/data/42.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d901 as d901 } from '../descriptors/data/42.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMetadataPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
