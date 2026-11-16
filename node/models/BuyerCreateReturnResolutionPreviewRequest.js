import { d7305 as c0 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7352 as c1 } from '../descriptors/data/349.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7546 as c2, d7547 as c3 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7472 as c4, d7473 as c5, d7474 as c6, d7475 as c7 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7305 as d7305 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnResolutionPreviewRequest"]:c0(),["BuyerReturnReplacementLineItemRequest"]:c1(),["ReturnResolutionLineItemRequest"]:c2(),["SharedCodec54"]:c3(),["SharedCodec91"]:c4(),["SharedCodec92"]:c5(),["SharedCodec93"]:c6(),["SharedCodec94"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
