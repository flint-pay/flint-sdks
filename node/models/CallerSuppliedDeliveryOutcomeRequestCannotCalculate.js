import { d119 as c0 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7457 as c1, d7458 as c2 } from '../descriptors/data/342.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7466 as c3, d7467 as c4 } from '../descriptors/data/343.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d119 as d119 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestCannotCalculate"]:c0(),["SharedCodec161"]:c1(),["SharedCodec162"]:c2(),["SharedCodec170"]:c3(),["SharedCodec171"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
