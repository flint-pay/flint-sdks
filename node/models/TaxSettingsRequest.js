import { d9438 as c0, d9439 as c1 } from '../descriptors/data/460.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6439 as c2 } from '../descriptors/data/280.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6439 as d6439 } from '../descriptors/data/280.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2369"]:c0(),["SharedCodec2370"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
