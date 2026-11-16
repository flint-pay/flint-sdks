import { d6041 as c0, d6039 as c4, d6040 as c5 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d283 as c1 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7296 as c2 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d283 as d283 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateLocationRequest"]:c1(),["LocationCoordinateRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
