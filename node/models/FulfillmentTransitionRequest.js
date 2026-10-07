import { d793 as c0, d780 as c1, d781 as c2, d782 as c3, d783 as c4, d784 as c5, d785 as c6, d786 as c7, d787 as c8, d788 as c9, d789 as c10, d790 as c11, d791 as c12, d792 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d793 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec219"]:c1(),["SharedCodec220"]:c2(),["SharedCodec221"]:c3(),["SharedCodec222"]:c4(),["SharedCodec223"]:c5(),["SharedCodec224"]:c6(),["SharedCodec225"]:c7(),["SharedCodec226"]:c8(),["SharedCodec227"]:c9(),["SharedCodec228"]:c10(),["SharedCodec229"]:c11(),["SharedCodec230"]:c12(),["SharedCodec231"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
