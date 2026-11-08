import { d223 as c0 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c2, d5375 as c3, d5376 as c4, d5377 as c5 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d223 as d223 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRedemptionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec221"]:c2(),["SharedCodec225"]:c3(),["SharedCodec226"]:c4(),["SharedCodec227"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRedemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
