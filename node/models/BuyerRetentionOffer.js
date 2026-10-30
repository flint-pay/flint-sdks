import { d6842 as c0 } from '../descriptors/data/324.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6842 as d6842 } from '../descriptors/data/324.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRetentionOffer"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRetentionOffer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
