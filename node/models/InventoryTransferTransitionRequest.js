import { d1475 as c0, d1489 as c1, d1510 as c2, d1495 as c3, d1494 as c4, d1493 as c5, d1500 as c6, d1499 as c7, d1498 as c8, d1497 as c9, d1496 as c10, d1503 as c11, d1502 as c12, d1501 as c13, d1506 as c14, d1505 as c15, d1504 as c16, d1509 as c17, d1508 as c18, d1507 as c19 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1510 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1510;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec389"]:c3(),["SharedCodec390"]:c4(),["SharedCodec391"]:c5(),["SharedCodec392"]:c6(),["SharedCodec393"]:c7(),["SharedCodec394"]:c8(),["SharedCodec395"]:c9(),["SharedCodec396"]:c10(),["SharedCodec397"]:c11(),["SharedCodec398"]:c12(),["SharedCodec399"]:c13(),["SharedCodec400"]:c14(),["SharedCodec401"]:c15(),["SharedCodec402"]:c16(),["SharedCodec403"]:c17(),["SharedCodec404"]:c18(),["SharedCodec405"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
