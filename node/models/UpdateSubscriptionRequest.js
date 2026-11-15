import { d6013 as c0, d6011 as c2, d6012 as c3 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6703 as c1 } from '../descriptors/data/311.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6122 as c4, d6123 as c5 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8764 as c6, d8765 as c7 } from '../descriptors/data/432.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7460 as c8 } from '../descriptors/data/356.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7461 as c9, d7462 as c26 } from '../descriptors/data/357.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8741 as c10, d8742 as c11, d8745 as c21, d8746 as c22, d8747 as c23 } from '../descriptors/data/431.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5915 as c12, d5916 as c13, d5914 as c14 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6132 as c15, d6133 as c16 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8770 as c17, d8771 as c18, d8772 as c19, d8773 as c20 } from '../descriptors/data/433.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7540 as c24, d7542 as c27 } from '../descriptors/data/360.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8798 as c25 } from '../descriptors/data/435.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5708 as c28 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5708 as d5708 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5708;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec145"]:c4(),["SharedCodec146"]:c5(),["SharedCodec1553"]:c6(),["SharedCodec1554"]:c7(),["SharedCodec1570"]:c8(),["SharedCodec1571"]:c9(),["SharedCodec1630"]:c10(),["SharedCodec1631"]:c11(),["SharedCodec1678"]:c12(),["SharedCodec1679"]:c13(),["SharedCodec1680"]:c14(),["SharedCodec169"]:c15(),["SharedCodec170"]:c16(),["SharedCodec1813"]:c17(),["SharedCodec1814"]:c18(),["SharedCodec1815"]:c19(),["SharedCodec1816"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec97"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
