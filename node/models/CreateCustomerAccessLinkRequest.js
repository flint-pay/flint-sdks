import { d220 as c0 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6328 as c1 } from '../descriptors/data/289.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d220 as d220 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerAccessLinkRequest"]:c0(),["SharedCodec215"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
