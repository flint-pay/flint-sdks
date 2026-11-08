import { d5537 as c0 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c1, d5452 as c2, d5453 as c3, d5454 as c4, d5450 as c5, d5447 as c6, d5448 as c7, d5449 as c8 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5537 as d5537 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec230"]:c2(),["SharedCodec231"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec628"]:c6(),["SharedCodec629"]:c7(),["SharedCodec630"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
