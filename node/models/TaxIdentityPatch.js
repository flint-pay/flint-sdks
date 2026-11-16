import { d7161 as c0, d7152 as c3, d7153 as c4 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6842 as c1, d6843 as c2 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7149 as c5 } from '../descriptors/data/325.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6435 as c6 } from '../descriptors/data/280.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7149 as d7149 } from '../descriptors/data/325.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1321"]:c3(),["SharedCodec1322"]:c4(),["TaxIdentityPatch"]:c5(),["TaxIdentityRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
