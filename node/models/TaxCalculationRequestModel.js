import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8635 as c1 } from '../descriptors/data/410.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8093 as c2, d8094 as c3 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8635 as d8635 } from '../descriptors/data/410.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxCalculationRequestModel"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequestModel"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
