import { d6745 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c1 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6517 as c2 } from '../descriptors/data/286.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6517 as d6517 } from '../descriptors/data/286.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6517;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2406"]:c0(),["SharedCodec2409"]:c1(),["UpdateReturnPolicyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
