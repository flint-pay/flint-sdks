import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5069 as c1, d5070 as c2, d5071 as c3, d5072 as c4 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5070 as d5070 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5070;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequest"]:c1(),["OrderDraftLineItemTaxRequest"]:c2(),["OrderDraftTaxComponentRequest"]:c3(),["OrderDraftTaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
