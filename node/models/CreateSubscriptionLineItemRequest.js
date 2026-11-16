import { d374 as c0 } from '../descriptors/data/23.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8826 as c1, d8827 as c2 } from '../descriptors/data/436.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d374 as d374 } from '../descriptors/data/23.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d374;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionLineItemRequest"]:c0(),["SharedCodec424"]:c1(),["SharedCodec425"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
