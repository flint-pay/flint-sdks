import { d1612 as c0, d1626 as c1, d1647 as c2, d1632 as c3, d1631 as c4, d1630 as c5, d1637 as c6, d1636 as c7, d1635 as c8, d1634 as c9, d1633 as c10, d1640 as c11, d1639 as c12, d1638 as c13, d1643 as c14, d1642 as c15, d1641 as c16, d1646 as c17, d1645 as c18, d1644 as c19 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1647 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1647;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec430"]:c3(),["SharedCodec431"]:c4(),["SharedCodec432"]:c5(),["SharedCodec433"]:c6(),["SharedCodec434"]:c7(),["SharedCodec435"]:c8(),["SharedCodec436"]:c9(),["SharedCodec437"]:c10(),["SharedCodec438"]:c11(),["SharedCodec439"]:c12(),["SharedCodec440"]:c13(),["SharedCodec441"]:c14(),["SharedCodec442"]:c15(),["SharedCodec443"]:c16(),["SharedCodec444"]:c17(),["SharedCodec445"]:c18(),["SharedCodec446"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
