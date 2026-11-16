import { d197 as c0 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5881 as c2, d5882 as c3, d5883 as c4 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5840 as c5 } from '../descriptors/data/261.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d197 as d197 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequest"]:c0(),["SharedCodec185"]:c1(),["SharedCodec186"]:c2(),["SharedCodec187"]:c3(),["SharedCodec188"]:c4(),["SharedCodec3"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
