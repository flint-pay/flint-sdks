import { d5537 as c0 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as c1, d5452 as c3, d5453 as c4, d5454 as c5, d5450 as c6, d5447 as c7, d5448 as c8, d5449 as c9 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d754 as c2 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5566 as c10, d5567 as c11, d5568 as c12, d5569 as c13, d5570 as c14, d5571 as c15, d5572 as c16, d5573 as c17, d5574 as c18, d5575 as c19, d5576 as c20, d5577 as c21, d5578 as c22, d5579 as c23, d5580 as c24, d5581 as c25, d5582 as c26, d5583 as c27, d5584 as c28 } from '../descriptors/data/250.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d754 as d754 } from '../descriptors/data/37.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec628"]:c7(),["SharedCodec629"]:c8(),["SharedCodec630"]:c9(),["SharedCodec692"]:c10(),["SharedCodec693"]:c11(),["SharedCodec694"]:c12(),["SharedCodec695"]:c13(),["SharedCodec696"]:c14(),["SharedCodec697"]:c15(),["SharedCodec698"]:c16(),["SharedCodec699"]:c17(),["SharedCodec700"]:c18(),["SharedCodec701"]:c19(),["SharedCodec702"]:c20(),["SharedCodec703"]:c21(),["SharedCodec704"]:c22(),["SharedCodec705"]:c23(),["SharedCodec706"]:c24(),["SharedCodec707"]:c25(),["SharedCodec708"]:c26(),["SharedCodec709"]:c27(),["SharedCodec710"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
