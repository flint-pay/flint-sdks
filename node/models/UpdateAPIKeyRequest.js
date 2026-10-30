import { d4351 as c0, d4338 as c1, d4354 as c2, d4339 as c3, d4340 as c4, d4352 as c6, d4353 as c7 } from '../descriptors/data/184.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4300 as c5 } from '../descriptors/data/181.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4141 as c8 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4141 as d4141 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec128"]:c0(),["SharedCodec1344"]:c1(),["SharedCodec1345"]:c2(),["SharedCodec1346"]:c3(),["SharedCodec1347"]:c4(),["SharedCodec3"]:c5(),["SharedCodec318"]:c6(),["SharedCodec319"]:c7(),["UpdateAPIKeyRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
