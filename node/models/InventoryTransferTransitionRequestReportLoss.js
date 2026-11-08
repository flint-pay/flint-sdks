import { d5537 as c0 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c1, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5447 as c7, d5448 as c8, d5449 as c9 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d758 as c2 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5580 as c10, d5581 as c11 } from '../descriptors/data/250.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d758 as d758 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReportLoss"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec628"]:c7(),["SharedCodec629"]:c8(),["SharedCodec630"]:c9(),["SharedCodec706"]:c10(),["SharedCodec707"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReportLoss(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
