import { d6562 as c0 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7264 as c1 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6562 as d6562 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftTaxJurisdictionRequestModel"]:c0(),["TaxJurisdictionRequestModel"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftTaxJurisdictionRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
