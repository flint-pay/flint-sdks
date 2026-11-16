import { d1062 as c0 } from '../descriptors/data/52.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8075 as c1, d8076 as c2, d8077 as c3 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1062 as d1062 } from '../descriptors/data/52.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputNone"]:c0(),["SharedCodec1489"]:c1(),["SharedCodec1490"]:c2(),["SharedCodec1491"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
