import { d1381 as c0 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9208 as c1 } from '../descriptors/data/446.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1381 as d1381 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAllRequest"]:c0(),["SharedCodec2125"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAllRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
