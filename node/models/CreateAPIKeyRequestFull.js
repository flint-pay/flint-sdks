import { d198 as c0 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5840 as c2 } from '../descriptors/data/261.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d198 as d198 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestFull"]:c0(),["SharedCodec185"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
