import { d1738 as c0, d771 as c1, d1731 as c2, d1732 as c3, d1733 as c4, d1734 as c5, d1735 as c6, d1736 as c7, d1737 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1738 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec236"]:c1(),["SharedCodec447"]:c2(),["SharedCodec448"]:c3(),["SharedCodec449"]:c4(),["SharedCodec450"]:c5(),["SharedCodec451"]:c6(),["SharedCodec452"]:c7(),["SharedCodec453"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
