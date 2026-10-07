import { d1587 as c0, d1601 as c1, d1622 as c2, d1607 as c3, d1606 as c4, d1605 as c5, d1612 as c6, d1611 as c7, d1610 as c8, d1609 as c9, d1608 as c10, d1615 as c11, d1614 as c12, d1613 as c13, d1618 as c14, d1617 as c15, d1616 as c16, d1621 as c17, d1620 as c18, d1619 as c19 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1622 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1622;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec392"]:c3(),["SharedCodec393"]:c4(),["SharedCodec394"]:c5(),["SharedCodec395"]:c6(),["SharedCodec396"]:c7(),["SharedCodec397"]:c8(),["SharedCodec398"]:c9(),["SharedCodec399"]:c10(),["SharedCodec400"]:c11(),["SharedCodec401"]:c12(),["SharedCodec402"]:c13(),["SharedCodec403"]:c14(),["SharedCodec404"]:c15(),["SharedCodec405"]:c16(),["SharedCodec406"]:c17(),["SharedCodec407"]:c18(),["SharedCodec408"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
