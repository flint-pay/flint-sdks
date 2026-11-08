import { d229 as c0 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d677 as c1 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c2, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5435 as c7, d5436 as c8, d5437 as c9, d5447 as c10, d5448 as c11, d5449 as c12 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d229 as d229 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec234"]:c7(),["SharedCodec235"]:c8(),["SharedCodec236"]:c9(),["SharedCodec628"]:c10(),["SharedCodec629"]:c11(),["SharedCodec630"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
