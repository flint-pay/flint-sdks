import { d4429 as c0, d4431 as c3, d4432 as c4, d4430 as c5 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6001 as c1, d5998 as c6 } from '../descriptors/data/275.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5987 as c7, d5988 as c8 } from '../descriptors/data/274.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4205 as c9 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4205 as d4205 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4205;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec1366"]:c3(),["SharedCodec1367"]:c4(),["SharedCodec1368"]:c5(),["SharedCodec1406"]:c6(),["SharedCodec1414"]:c7(),["SharedCodec1415"]:c8(),["UpdateModifierGroupRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
