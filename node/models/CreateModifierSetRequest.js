import { d5968 as c0, d5965 as c1, d5966 as c11 } from '../descriptors/data/274.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d246 as c2, d247 as c3 } from '../descriptors/data/13.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c4 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4414 as c5, d4416 as c8 } from '../descriptors/data/188.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c6 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5987 as c7 } from '../descriptors/data/276.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1518 as c9 } from '../descriptors/data/70.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1529 as c10 } from '../descriptors/data/71.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d247 as d247 } from '../descriptors/data/13.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["MetadataRequest"]:c4(),["ModifierOverride"]:c5(),["MoneyValue"]:c6(),["SharedCodec246"]:c7(),["SharedCodec247"]:c8(),["SharedCodec248"]:c9(),["SharedCodec249"]:c10(),["TextModifierConfigRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
