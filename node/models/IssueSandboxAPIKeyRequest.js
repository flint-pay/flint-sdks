import { d866 as c0 } from '../descriptors/data/40.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4351 as c1 } from '../descriptors/data/184.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6793 as c3, d6794 as c4, d6795 as c5 } from '../descriptors/data/323.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d866 as d866 } from '../descriptors/data/40.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequest"]:c0(),["SharedCodec128"]:c1(),["SharedCodec3"]:c2(),["SharedCodec847"]:c3(),["SharedCodec848"]:c4(),["SharedCodec849"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
