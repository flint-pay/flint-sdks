import { d341 as c0 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8474 as c1 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8485 as c2 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8343 as c3, d8344 as c4, d8345 as c5 } from '../descriptors/data/408.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7016 as c6 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d341 as d341 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["SharedCodec1463"]:c3(),["SharedCodec1464"]:c4(),["SharedCodec1465"]:c5(),["SharedCodec304"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
