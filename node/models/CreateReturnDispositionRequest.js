import { d338 as c0 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8348 as c1, d8349 as c2 } from '../descriptors/data/408.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d338 as d338 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d338;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequest"]:c0(),["CreateReturnDispositionRequestInspectionLine"]:c1(),["CreateReturnDispositionRequestReceiptLine"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
