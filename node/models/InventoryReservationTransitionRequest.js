import { d5506 as c0, d5497 as c10, d5498 as c11, d5499 as c12, d5500 as c13, d5501 as c14, d5502 as c15, d5503 as c16, d5504 as c17, d5505 as c18 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d723 as c1 } from '../descriptors/data/36.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c2, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5416 as c7, d5417 as c8, d5418 as c9 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d723 as d723 } from '../descriptors/data/36.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d723;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["SharedCodec663"]:c10(),["SharedCodec664"]:c11(),["SharedCodec665"]:c12(),["SharedCodec666"]:c13(),["SharedCodec667"]:c14(),["SharedCodec668"]:c15(),["SharedCodec669"]:c16(),["SharedCodec670"]:c17(),["SharedCodec671"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
