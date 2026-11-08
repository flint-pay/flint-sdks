import { d232 as c0 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d672 as c1, d674 as c2, d677 as c3 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c4, d5452 as c5, d5453 as c6, d5454 as c7, d5450 as c8, d5435 as c9, d5436 as c10, d5437 as c11, d5447 as c16, d5448 as c17, d5449 as c18, d5438 as c19, d5439 as c20, d5440 as c21, d5441 as c22, d5442 as c23 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1505 as c12, d1506 as c13, d1507 as c14 } from '../descriptors/data/70.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1509 as c15 } from '../descriptors/data/71.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d232 as d232 } from '../descriptors/data/11.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec234"]:c9(),["SharedCodec235"]:c10(),["SharedCodec236"]:c11(),["SharedCodec237"]:c12(),["SharedCodec238"]:c13(),["SharedCodec239"]:c14(),["SharedCodec240"]:c15(),["SharedCodec628"]:c16(),["SharedCodec629"]:c17(),["SharedCodec630"]:c18(),["SharedCodec631"]:c19(),["SharedCodec632"]:c20(),["SharedCodec633"]:c21(),["SharedCodec634"]:c22(),["SharedCodec635"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
