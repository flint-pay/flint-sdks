import { d8778 as c0 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7568 as c1 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5549 as c2 } from '../descriptors/data/241.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5549 as d5549 } from '../descriptors/data/241.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5549;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec439"]:c0(),["SharedCodec97"]:c1(),["SubscriptionEndAfterRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
