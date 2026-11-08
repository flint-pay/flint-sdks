import { d231 as c0 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d674 as c1 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c2, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5447 as c7, d5448 as c8, d5449 as c9 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d231 as d231 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentQuantityRequest"]:c0(),["InventoryAdjustmentQuantityLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec628"]:c7(),["SharedCodec629"]:c8(),["SharedCodec630"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
