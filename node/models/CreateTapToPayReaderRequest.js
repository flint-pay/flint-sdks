import { d387 as c0 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d387 as d387 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTapToPayReaderRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTapToPayReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
