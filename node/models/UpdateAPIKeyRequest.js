import { d5879 as c0, d5880 as c1 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5893 as c2, d5894 as c4, d5895 as c5 } from '../descriptors/data/264.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5840 as c3 } from '../descriptors/data/261.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5659 as c6 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5659 as d5659 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1683"]:c0(),["SharedCodec1684"]:c1(),["SharedCodec185"]:c2(),["SharedCodec3"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
