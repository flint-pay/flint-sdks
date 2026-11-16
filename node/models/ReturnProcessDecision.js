import { d9321 as c0 } from '../descriptors/data/454.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9330 as c1, d9331 as c2 } from '../descriptors/data/455.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9321 as d9321 } from '../descriptors/data/454.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec2106"]:c1(),["SharedCodec2107"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
