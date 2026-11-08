import { d6420 as c0 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c1 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6420 as d6420 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["SharedCodec604"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardCustomAmountBoundsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
