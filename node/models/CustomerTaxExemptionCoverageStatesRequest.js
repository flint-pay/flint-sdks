import { d453 as c0 } from '../descriptors/data/27.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6989 as c1 } from '../descriptors/data/317.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d453 as d453 } from '../descriptors/data/27.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d453;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageStatesRequest"]:c0(),["SharedCodec614"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
