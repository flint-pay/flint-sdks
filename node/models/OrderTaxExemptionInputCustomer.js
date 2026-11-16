import { d1061 as c0 } from '../descriptors/data/52.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8074 as c1, d8075 as c2, d8076 as c3 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1061 as d1061 } from '../descriptors/data/52.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputCustomer"]:c0(),["SharedCodec1488"]:c1(),["SharedCodec1489"]:c2(),["SharedCodec1490"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
