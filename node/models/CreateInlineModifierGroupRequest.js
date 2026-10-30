import { d5968 as c0, d5965 as c2, d5966 as c5 } from '../descriptors/data/274.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d243 as c1 } from '../descriptors/data/12.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c4 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5968 as d5968 } from '../descriptors/data/274.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5968;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierGroupRequest"]:c1(),["CreateModifierRequest"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["TextModifierConfigRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInlineModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
