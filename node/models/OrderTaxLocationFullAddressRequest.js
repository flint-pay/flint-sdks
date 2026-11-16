import { d8068 as c0, d8081 as c1, d8082 as c2 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8068 as d8068 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8068;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["SharedCodec1495"]:c1(),["SharedCodec1496"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
