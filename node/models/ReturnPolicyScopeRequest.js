import { d9187 as c0 } from '../descriptors/data/445.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9207 as c1, d9208 as c2, d9209 as c3, d9210 as c4 } from '../descriptors/data/446.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9187 as d9187 } from '../descriptors/data/445.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec2124"]:c1(),["SharedCodec2125"]:c2(),["SharedCodec2126"]:c3(),["SharedCodec2127"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
