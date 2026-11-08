import { d5999 as c0, d5996 as c1, d5997 as c11 } from '../descriptors/data/275.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d251 as c2, d252 as c3 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c4 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4445 as c5, d4447 as c8 } from '../descriptors/data/189.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c6 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6018 as c7 } from '../descriptors/data/277.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1526 as c9, d1537 as c10 } from '../descriptors/data/71.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d252 as d252 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d252;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInlineModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["CreateModifierSetGroupRequest"]:c2(),["CreateModifierSetRequest"]:c3(),["MetadataRequest"]:c4(),["ModifierOverride"]:c5(),["MoneyValue"]:c6(),["SharedCodec248"]:c7(),["SharedCodec249"]:c8(),["SharedCodec250"]:c9(),["SharedCodec251"]:c10(),["TextModifierConfigRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
