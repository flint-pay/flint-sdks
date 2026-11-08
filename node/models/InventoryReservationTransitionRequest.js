import { d5537 as c0, d5528 as c10, d5529 as c11, d5530 as c12, d5531 as c13, d5532 as c14, d5533 as c15, d5534 as c16, d5535 as c17, d5536 as c18 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d728 as c1 } from '../descriptors/data/36.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c2, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5447 as c7, d5448 as c8, d5449 as c9 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d728 as d728 } from '../descriptors/data/36.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d728;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec628"]:c7(),["SharedCodec629"]:c8(),["SharedCodec630"]:c9(),["SharedCodec665"]:c10(),["SharedCodec666"]:c11(),["SharedCodec667"]:c12(),["SharedCodec668"]:c13(),["SharedCodec669"]:c14(),["SharedCodec670"]:c15(),["SharedCodec671"]:c16(),["SharedCodec672"]:c17(),["SharedCodec673"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
