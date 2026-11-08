import { d5999 as c0, d5996 as c1, d5997 as c7 } from '../descriptors/data/275.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d250 as c2 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4445 as c4, d4447 as c6 } from '../descriptors/data/189.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c5 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d250 as d250 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupInputInline"]:c2(),["MetadataRequest"]:c3(),["ModifierOverride"]:c4(),["MoneyValue"]:c5(),["SharedCodec249"]:c6(),["TextModifierConfigRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetGroupInputInline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
