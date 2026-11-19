import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8688 as c1, d8689 as c2 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8688 as d8688 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8688;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftTaxComponentRequestModel"]:c1(),["OrderDraftTaxJurisdictionRequestModel"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftTaxComponentRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
