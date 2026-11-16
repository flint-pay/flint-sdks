import { d5941 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1042 as c1 } from '../descriptors/data/51.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6610 as c2 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c3 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1042 as d1042 } from '../descriptors/data/51.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["OrderLineItemModifierInputCatalogRequest"]:c1(),["SharedCodec328"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierInputCatalogRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
