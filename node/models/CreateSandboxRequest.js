import { d309 as c0 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4351 as c1, d4352 as c4, d4353 as c5 } from '../descriptors/data/184.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6790 as c3, d6791 as c6, d6792 as c7 } from '../descriptors/data/323.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d309 as d309 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec128"]:c1(),["SharedCodec3"]:c2(),["SharedCodec317"]:c3(),["SharedCodec318"]:c4(),["SharedCodec319"]:c5(),["SharedCodec320"]:c6(),["SharedCodec321"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
