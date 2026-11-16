import { d5941 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7745 as c1 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c2, d6610 as c3, d6611 as c4, d6612 as c5, d6613 as c6 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c7 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7745 as d7745 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7745;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["OrderLineItemModifierRequestModel"]:c1(),["SharedCodec327"]:c2(),["SharedCodec328"]:c3(),["SharedCodec329"]:c4(),["SharedCodec330"]:c5(),["SharedCodec331"]:c6(),["TextModifierRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
