import { d5506 as c0 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c1, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5416 as c7, d5417 as c8, d5418 as c9 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d749 as c2 } from '../descriptors/data/36.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5535 as c10, d5536 as c11, d5537 as c12, d5538 as c13, d5539 as c14, d5540 as c15, d5541 as c16, d5542 as c17, d5543 as c18, d5544 as c19, d5545 as c20, d5546 as c21, d5547 as c22, d5548 as c23, d5549 as c24, d5550 as c25, d5551 as c26, d5552 as c27, d5553 as c28 } from '../descriptors/data/249.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d749 as d749 } from '../descriptors/data/36.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["SharedCodec690"]:c10(),["SharedCodec691"]:c11(),["SharedCodec692"]:c12(),["SharedCodec693"]:c13(),["SharedCodec694"]:c14(),["SharedCodec695"]:c15(),["SharedCodec696"]:c16(),["SharedCodec697"]:c17(),["SharedCodec698"]:c18(),["SharedCodec699"]:c19(),["SharedCodec700"]:c20(),["SharedCodec701"]:c21(),["SharedCodec702"]:c22(),["SharedCodec703"]:c23(),["SharedCodec704"]:c24(),["SharedCodec705"]:c25(),["SharedCodec706"]:c26(),["SharedCodec707"]:c27(),["SharedCodec708"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
