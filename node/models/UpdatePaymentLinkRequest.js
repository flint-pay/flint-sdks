import { d6125 as c0, d6126 as c1, d6128 as c2, d6129 as c3, d6130 as c4 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5923 as c5, d5924 as c6, d5915 as c30, d5916 as c31, d5914 as c32 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6557 as c7, d6554 as c39, d6555 as c40, d6556 as c41 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c8 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6131 as c9 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7975 as c10, d7978 as c11, d7980 as c12, d7983 as c13, d7985 as c14 } from '../descriptors/data/384.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7988 as c15, d7991 as c16, d7996 as c17 } from '../descriptors/data/385.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8011 as c18 } from '../descriptors/data/386.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8016 as c19, d8017 as c20, d8019 as c21, d8020 as c22, d8021 as c23, d8022 as c24, d8023 as c25, d8024 as c26 } from '../descriptors/data/387.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8025 as c27, d8026 as c28, d8027 as c29 } from '../descriptors/data/388.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6254 as c33 } from '../descriptors/data/286.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7566 as c34, d7567 as c35 } from '../descriptors/data/362.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8032 as c36, d8033 as c37 } from '../descriptors/data/389.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6939 as c38 } from '../descriptors/data/326.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5671 as c42 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5671 as d5671 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5671;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1185"]:c18(),["SharedCodec1190"]:c19(),["SharedCodec1191"]:c20(),["SharedCodec1193"]:c21(),["SharedCodec1194"]:c22(),["SharedCodec1195"]:c23(),["SharedCodec1196"]:c24(),["SharedCodec1197"]:c25(),["SharedCodec1198"]:c26(),["SharedCodec1199"]:c27(),["SharedCodec1200"]:c28(),["SharedCodec1201"]:c29(),["SharedCodec1678"]:c30(),["SharedCodec1679"]:c31(),["SharedCodec1680"]:c32(),["SharedCodec1684"]:c33(),["SharedCodec1730"]:c34(),["SharedCodec1731"]:c35(),["SharedCodec1759"]:c36(),["SharedCodec1760"]:c37(),["SharedCodec79"]:c38(),["SharedCodec834"]:c39(),["SharedCodec835"]:c40(),["SharedCodec836"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
