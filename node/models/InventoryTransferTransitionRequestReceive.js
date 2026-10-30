import { d5506 as c0 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c1, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5416 as c7, d5417 as c8, d5418 as c9 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d752 as c2 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5539 as c10, d5540 as c11, d5541 as c12, d5542 as c13, d5543 as c14, d5544 as c15 } from '../descriptors/data/249.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d752 as d752 } from '../descriptors/data/37.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d752;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReceive"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["SharedCodec694"]:c10(),["SharedCodec695"]:c11(),["SharedCodec696"]:c12(),["SharedCodec697"]:c13(),["SharedCodec698"]:c14(),["SharedCodec699"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
