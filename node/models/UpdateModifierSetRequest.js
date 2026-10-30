import { d5969 as c0, d5970 as c3, d5966 as c14 } from '../descriptors/data/274.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c1, d4400 as c6, d4401 as c7, d4399 as c8 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4414 as c2, d4416 as c11 } from '../descriptors/data/188.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d918 as c4 } from '../descriptors/data/43.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c5 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5972 as c9 } from '../descriptors/data/275.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5987 as c10 } from '../descriptors/data/276.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d3959 as c12, d3960 as c13 } from '../descriptors/data/163.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4175 as c15 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4175 as d4175 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverride"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1348"]:c6(),["SharedCodec1349"]:c7(),["SharedCodec1350"]:c8(),["SharedCodec1398"]:c9(),["SharedCodec246"]:c10(),["SharedCodec247"]:c11(),["SharedCodec872"]:c12(),["SharedCodec873"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
