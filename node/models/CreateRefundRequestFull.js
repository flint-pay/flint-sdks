import { d334 as c0 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7729 as c3 } from '../descriptors/data/370.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c4 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8312 as c5, d8313 as c6, d8315 as c7, d8319 as c8 } from '../descriptors/data/405.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d334 as d334 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestFull"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundDestinations"]:c3(),["SharedCodec136"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec388"]:c7(),["SplitReversalRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
