import { d4473 as c0, d4474 as c3, d4478 as c5, d4469 as c9 } from '../descriptors/data/196.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3073 as c1 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4468 as c2 } from '../descriptors/data/195.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c4 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3076 as c6 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4483 as c7, d4484 as c8 } from '../descriptors/data/197.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4474 as d4474 } from '../descriptors/data/196.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierOverride"]:c1(),["ModifierRequest"]:c2(),["ModifierSetGroupRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec159"]:c5(),["SharedCodec160"]:c6(),["SharedCodec961"]:c7(),["SharedCodec962"]:c8(),["TextModifierConfigRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
