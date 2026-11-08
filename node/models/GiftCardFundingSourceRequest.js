import { d677 as c0 } from '../descriptors/data/34.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6596 as c1, d6597 as c2, d6598 as c3, d6599 as c4, d6600 as c5, d6601 as c6, d6602 as c7, d6603 as c8, d6604 as c9, d6605 as c10, d6606 as c11, d6607 as c12, d6608 as c13, d6609 as c14, d6610 as c15, d6611 as c16, d6612 as c17 } from '../descriptors/data/300.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d677 as d677 } from '../descriptors/data/34.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d677;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec241"]:c1(),["SharedCodec242"]:c2(),["SharedCodec243"]:c3(),["SharedCodec244"]:c4(),["SharedCodec245"]:c5(),["SharedCodec246"]:c6(),["SharedCodec247"]:c7(),["SharedCodec248"]:c8(),["SharedCodec249"]:c9(),["SharedCodec250"]:c10(),["SharedCodec251"]:c11(),["SharedCodec252"]:c12(),["SharedCodec253"]:c13(),["SharedCodec254"]:c14(),["SharedCodec255"]:c15(),["SharedCodec256"]:c16(),["SharedCodec257"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
