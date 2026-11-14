import { d339 as c0 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8467 as c1 } from '../descriptors/data/416.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8468 as c2 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d339 as d339 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequest"]:c0(),["CreateReturnDispositionRequestInspectionLine"]:c1(),["CreateReturnDispositionRequestReceiptLine"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
