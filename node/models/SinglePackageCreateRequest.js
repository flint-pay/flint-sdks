import { d4268 as c0 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6026 as c2, d6027 as c3 } from '../descriptors/data/277.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5278 as c4 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6108 as c5 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c6 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6108 as d6108 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0(),["MetadataRequest"]:c1(),["SharedCodec1253"]:c2(),["SharedCodec1254"]:c3(),["SharedCodec322"]:c4(),["SinglePackageCreateRequest"]:c5(),["Weight"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
