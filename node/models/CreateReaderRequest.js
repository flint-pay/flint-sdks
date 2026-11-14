import { d330 as c0 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8262 as c2, d8263 as c3 } from '../descriptors/data/403.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d330 as d330 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReaderRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec388"]:c2(),["SharedCodec389"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
