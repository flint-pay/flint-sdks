import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6608 as d6608 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6608;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLineItemFulfillmentRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
