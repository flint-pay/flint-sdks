import { d1383 as c0 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9210 as c1 } from '../descriptors/data/446.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1383 as d1383 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeIncludeRequest"]:c0(),["SharedCodec2127"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeIncludeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
