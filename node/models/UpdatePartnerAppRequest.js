import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7863 as c1 } from '../descriptors/data/378.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7887 as c2, d7888 as c3, d7889 as c4, d7890 as c5, d7891 as c6, d7892 as c7, d7893 as c8, d7894 as c9, d7895 as c10, d7896 as c11, d7897 as c12, d7898 as c13 } from '../descriptors/data/379.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5669 as c14 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5669 as d5669 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1747"]:c2(),["SharedCodec1748"]:c3(),["SharedCodec1749"]:c4(),["SharedCodec1750"]:c5(),["SharedCodec1751"]:c6(),["SharedCodec1752"]:c7(),["SharedCodec1753"]:c8(),["SharedCodec1754"]:c9(),["SharedCodec1755"]:c10(),["SharedCodec1756"]:c11(),["SharedCodec1757"]:c12(),["SharedCodec1758"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
