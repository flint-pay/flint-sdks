import { d6564 as c0 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7261 as c1 } from '../descriptors/data/342.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6564 as d6564 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftTaxJurisdictionRequestModel"]:c0(),["TaxJurisdictionRequestModel"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftTaxJurisdictionRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
