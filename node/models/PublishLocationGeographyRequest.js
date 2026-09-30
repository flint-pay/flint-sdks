import { d177 as c0, d1598 as c1, d1907 as c2 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1907 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1907;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddress"]:c0(),["LocationCoordinate"]:c1(),["PublishLocationGeographyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishLocationGeographyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
