import { d5537 as c0 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c1, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5447 as c7, d5448 as c8, d5449 as c9 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d757 as c2 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5570 as c10, d5571 as c11, d5572 as c12, d5573 as c13, d5574 as c14, d5575 as c15 } from '../descriptors/data/250.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d757 as d757 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReceive"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec628"]:c7(),["SharedCodec629"]:c8(),["SharedCodec630"]:c9(),["SharedCodec696"]:c10(),["SharedCodec697"]:c11(),["SharedCodec698"]:c12(),["SharedCodec699"]:c13(),["SharedCodec700"]:c14(),["SharedCodec701"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
