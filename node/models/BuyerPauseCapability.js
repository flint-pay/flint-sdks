import { d6900 as c0 } from '../descriptors/data/327.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6900 as d6900 } from '../descriptors/data/327.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6900;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerPauseCapability"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerPauseCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
