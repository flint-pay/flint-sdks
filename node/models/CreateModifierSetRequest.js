import { d4471 as c0, d4472 as c2, d4478 as c6, d4479 as c8, d4480 as c9, d4469 as c10 } from '../descriptors/data/196.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4467 as c1 } from '../descriptors/data/195.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d183 as c3 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3073 as c4 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c5 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3076 as c7 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d183 as d183 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d183;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["ModifierOverride"]:c4(),["MoneyValue"]:c5(),["SharedCodec159"]:c6(),["SharedCodec160"]:c7(),["SharedCodec161"]:c8(),["SharedCodec162"]:c9(),["TextModifierConfigRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
