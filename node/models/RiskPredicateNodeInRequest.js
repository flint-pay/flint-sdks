import { d9391 as c0, d9398 as c1, d9399 as c2 } from '../descriptors/data/458.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9391 as d9391 } from '../descriptors/data/458.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInRequest"]:c0(),["SharedCodec501"]:c1(),["SharedCodec502"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
