import { d6013 as c0, d6014 as c1 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6014 as d6014 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentSourceCardSelection"]:c0(),["OrderPaymentSourceSelection"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
