import { d820 as c0 } from '../descriptors/data/36.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3890 as c1 } from '../descriptors/data/164.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4613 as c2 } from '../descriptors/data/204.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4614 as c3, d4615 as c4, d4616 as c5, d4617 as c6, d4618 as c7, d4619 as c8 } from '../descriptors/data/205.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d820 as d820 } from '../descriptors/data/36.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec366"]:c1(),["SharedCodec991"]:c2(),["SharedCodec992"]:c3(),["SharedCodec993"]:c4(),["SharedCodec994"]:c5(),["SharedCodec995"]:c6(),["SharedCodec996"]:c7(),["SharedCodec997"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
