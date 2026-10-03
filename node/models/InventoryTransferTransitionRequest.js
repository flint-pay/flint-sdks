import { d1614 as c0, d1628 as c1, d1649 as c2, d1634 as c3, d1633 as c4, d1632 as c5, d1639 as c6, d1638 as c7, d1637 as c8, d1636 as c9, d1635 as c10, d1642 as c11, d1641 as c12, d1640 as c13, d1645 as c14, d1644 as c15, d1643 as c16, d1648 as c17, d1647 as c18, d1646 as c19 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1649 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec430"]:c3(),["SharedCodec431"]:c4(),["SharedCodec432"]:c5(),["SharedCodec433"]:c6(),["SharedCodec434"]:c7(),["SharedCodec435"]:c8(),["SharedCodec436"]:c9(),["SharedCodec437"]:c10(),["SharedCodec438"]:c11(),["SharedCodec439"]:c12(),["SharedCodec440"]:c13(),["SharedCodec441"]:c14(),["SharedCodec442"]:c15(),["SharedCodec443"]:c16(),["SharedCodec444"]:c17(),["SharedCodec445"]:c18(),["SharedCodec446"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
