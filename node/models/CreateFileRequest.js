import { d250 as c0 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d250 as d250 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFileRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
