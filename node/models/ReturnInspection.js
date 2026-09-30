import { d1965 as c0, d1967 as c1, d1979 as c2, d1980 as c3, d1977 as c4, d1978 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1979 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1979;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnInspection"]:c2(),["ReturnInspectionLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["SharedCodec485"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
