import { d1644 as c0, d1658 as c1, d1679 as c2, d1664 as c3, d1663 as c4, d1662 as c5, d1669 as c6, d1668 as c7, d1667 as c8, d1666 as c9, d1665 as c10, d1672 as c11, d1671 as c12, d1670 as c13, d1675 as c14, d1674 as c15, d1673 as c16, d1678 as c17, d1677 as c18, d1676 as c19 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1679 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec438"]:c3(),["SharedCodec439"]:c4(),["SharedCodec440"]:c5(),["SharedCodec441"]:c6(),["SharedCodec442"]:c7(),["SharedCodec443"]:c8(),["SharedCodec444"]:c9(),["SharedCodec445"]:c10(),["SharedCodec446"]:c11(),["SharedCodec447"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15(),["SharedCodec451"]:c16(),["SharedCodec452"]:c17(),["SharedCodec453"]:c18(),["SharedCodec454"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
