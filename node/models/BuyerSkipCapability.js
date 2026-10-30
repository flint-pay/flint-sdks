import { d6843 as c0 } from '../descriptors/data/325.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6843 as d6843 } from '../descriptors/data/325.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerSkipCapability"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerSkipCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
