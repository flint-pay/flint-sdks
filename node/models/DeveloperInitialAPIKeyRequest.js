import { d531 as c0 } from '../descriptors/data/28.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d531 as d531 } from '../descriptors/data/28.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperInitialAPIKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
