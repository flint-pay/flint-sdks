import { d1308 as c0 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5780 as c1 } from '../descriptors/data/265.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1308 as d1308 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestRecipientAccess"]:c0(),["SharedCodec1266"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
