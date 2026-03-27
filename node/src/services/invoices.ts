import { BaseService, resolveEnum } from "./base";
import type { FlintList } from "../pagination";
import type { Address, Money } from "../generated/types/common";
import type { DiscountInput, NetAmounts, OrderLineItemInput, TipInput } from "../generated/types/orders";
import {
  decodeBase64,
  fromRawAddress,
  fromRawMoney,
  fromRawStringMap,
  fromTimestamp,
  type Raw,
} from "./parsing";

const SERVICE = "flint.v1.commerce.InvoiceService";

export type InvoiceStatus = "draft" | "open" | "partially_paid" | "paid" | "void";

export const INVOICE_STATUS_MAP: Record<number, InvoiceStatus> = {
  1: "draft",
  2: "open",
  3: "partially_paid",
  4: "paid",
  5: "void",
};

export const INVOICE_STATUS_TO_PROTO: Record<InvoiceStatus, number> = {
  draft: 1,
  open: 2,
  partially_paid: 3,
  paid: 4,
  void: 5,
};

export type InvoiceRefundStatus = "none" | "partially_refunded" | "refunded";

export const INVOICE_REFUND_STATUS_MAP: Record<number, InvoiceRefundStatus> = {
  1: "none",
  2: "partially_refunded",
  3: "refunded",
};

export const INVOICE_REFUND_STATUS_TO_PROTO: Record<InvoiceRefundStatus, number> = {
  none: 1,
  partially_refunded: 2,
  refunded: 3,
};

export type InvoicePaymentRail = "card" | "bank_transfer" | "manual";

export const INVOICE_PAYMENT_RAIL_MAP: Record<number, InvoicePaymentRail> = {
  1: "card",
  2: "bank_transfer",
  3: "manual",
};

export const INVOICE_PAYMENT_RAIL_TO_PROTO: Record<InvoicePaymentRail, number> = {
  card: 1,
  bank_transfer: 2,
  manual: 3,
};

export type InvoicePaymentAttemptStatus = "open" | "settled" | "failed" | "canceled" | "expired";

export const INVOICE_PAYMENT_ATTEMPT_STATUS_MAP: Record<number, InvoicePaymentAttemptStatus> = {
  1: "open",
  2: "settled",
  3: "failed",
  4: "canceled",
  5: "expired",
};

export const INVOICE_PAYMENT_ATTEMPT_STATUS_TO_PROTO: Record<InvoicePaymentAttemptStatus, number> = {
  open: 1,
  settled: 2,
  failed: 3,
  canceled: 4,
  expired: 5,
};

export type InvoiceDeliveryKind = "send" | "reminder";

export const INVOICE_DELIVERY_KIND_MAP: Record<number, InvoiceDeliveryKind> = {
  1: "send",
  2: "reminder",
};

export const INVOICE_DELIVERY_KIND_TO_PROTO: Record<InvoiceDeliveryKind, number> = {
  send: 1,
  reminder: 2,
};

export type InvoiceDeliveryChannel = "email";

export const INVOICE_DELIVERY_CHANNEL_MAP: Record<number, InvoiceDeliveryChannel> = {
  1: "email",
};

export const INVOICE_DELIVERY_CHANNEL_TO_PROTO: Record<InvoiceDeliveryChannel, number> = {
  email: 1,
};

export type InvoiceDeliveryStatus = "pending" | "sent" | "failed";

export const INVOICE_DELIVERY_STATUS_MAP: Record<number, InvoiceDeliveryStatus> = {
  1: "pending",
  2: "sent",
  3: "failed",
};

export const INVOICE_DELIVERY_STATUS_TO_PROTO: Record<InvoiceDeliveryStatus, number> = {
  pending: 1,
  sent: 2,
  failed: 3,
};

export type InvoiceLineItem = {
  name: string;
  quantity: number;
  unitPriceMoney: Money;
  grossMoney: Money;
  discountMoney: Money;
  taxMoney: Money;
  netMoney: Money;
  description?: string;
  sku?: string;
  imageUrl?: string;
};

export type InvoiceDiscount = {
  name: string;
  amountMoney: Money;
  appliedMoney: Money;
  scope?: string;
  couponCode?: string;
};

export type InvoiceTip = {
  amountMoney?: Money;
  percent?: number;
  name?: string;
  description?: string;
};

export type InvoiceSnapshot = {
  merchantDisplayName?: string;
  customerDisplayName?: string;
  customerEmail?: string;
  billingAddress?: Address;
  lineItems: InvoiceLineItem[];
  discounts: InvoiceDiscount[];
  tips: InvoiceTip[];
  netAmounts: NetAmounts;
  buyerNote?: string;
  merchantNote?: string;
  memo?: string;
  footer?: string;
  reference?: string;
  serviceDate?: Date;
};

export type Invoice = {
  invoiceId: string;
  merchantId: string;
  orderId: string;
  customerId?: string;
  invoiceNumber: string;
  status: InvoiceStatus;
  refundStatus: InvoiceRefundStatus;
  dueAt?: Date;
  scheduledSendAt?: Date;
  sentAt?: Date;
  viewedAt?: Date;
  paidAt?: Date;
  voidedAt?: Date;
  recipientEmail?: string;
  ccEmails: string[];
  reference?: string;
  serviceDate?: Date;
  memo?: string;
  footer?: string;
  snapshot: InvoiceSnapshot;
  collectibleBalance: Money;
  paidMoney: Money;
  refundedMoney: Money;
  isOverdue: boolean;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, string>;
};

export type InvoiceEvent = {
  invoiceEventId: string;
  type: string;
  description: string;
  actorType?: string;
  actorId?: string;
  metadata: Record<string, string>;
  occurredAt: Date;
};

export type InvoiceDeliveryAttempt = {
  invoiceDeliveryAttemptId: string;
  kind: InvoiceDeliveryKind;
  channel: InvoiceDeliveryChannel;
  toEmail: string;
  ccEmails: string[];
  status: InvoiceDeliveryStatus;
  errorMessage?: string;
  createdAt: Date;
  sentAt?: Date;
};

export type InvoicePaymentAttempt = {
  invoicePaymentAttemptId: string;
  invoiceId: string;
  rail: InvoicePaymentRail;
  status: InvoicePaymentAttemptStatus;
  targetAmount: Money;
  checkoutSessionId?: string;
  paymentIntentId?: string;
  startedAt: Date;
  expiresAt?: Date;
  settledAt?: Date;
  failureCode?: string;
  failureMessage?: string;
};

export type InvoiceCheckoutSession = {
  checkoutSessionId: string;
  status?: string;
  url?: string;
  expiresAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  orderId?: string;
  invoiceId?: string;
  merchantId?: string;
};

export type InvoiceQuickPayInput = {
  lineItems?: OrderLineItemInput[];
  discounts?: DiscountInput[];
  tips?: TipInput[];
  customerId?: string;
  buyerNote?: string;
  merchantNote?: string;
};

export type InvoiceCreateParams =
  | {
      orderId: string;
      quickPay?: never;
      dueAt?: Date;
      scheduledSendAt?: Date;
      recipientEmail?: string;
      ccEmails?: string[];
      reference?: string;
      serviceDate?: Date;
      memo?: string;
      footer?: string;
      metadata?: Record<string, string>;
      idempotencyKey?: string;
    }
  | {
      quickPay: InvoiceQuickPayInput;
      orderId?: never;
      dueAt?: Date;
      scheduledSendAt?: Date;
      recipientEmail?: string;
      ccEmails?: string[];
      reference?: string;
      serviceDate?: Date;
      memo?: string;
      footer?: string;
      metadata?: Record<string, string>;
      idempotencyKey?: string;
    };

export type InvoiceListParams = {
  limit?: number;
  pageToken?: string;
  status?: InvoiceStatus;
  customerId?: string;
  orderId?: string;
  query?: string;
};

export type UpdateInvoiceParams = {
  dueAt?: Date;
  scheduledSendAt?: Date;
  recipientEmail?: string;
  ccEmails?: string[];
  reference?: string;
  serviceDate?: Date;
  memo?: string;
  footer?: string;
  metadata?: Record<string, string>;
  idempotencyKey?: string;
};

export type IdempotentInvoiceActionParams = {
  idempotencyKey?: string;
};

export type ManualInvoicePaymentParams = {
  amountMoney: Money;
  receivedAt?: Date;
  externalReference?: string;
  note?: string;
  idempotencyKey?: string;
};

export type InvoiceSendResult = {
  invoice: Invoice;
  publicToken: string;
  publicUrl: string;
  deliveryAttempt?: InvoiceDeliveryAttempt;
};

export type InvoicePublicLinkResult = {
  invoice: Invoice;
  publicToken: string;
  publicUrl: string;
};

export type InvoiceReminderResult = {
  invoice: Invoice;
  deliveryAttempt?: InvoiceDeliveryAttempt;
};

export type InvoiceEventListParams = {
  limit?: number;
  pageToken?: string;
};

export type InvoiceDeliveryAttemptListParams = {
  limit?: number;
  pageToken?: string;
};

export type InvoiceCheckoutSessionResult = {
  invoice: Invoice;
  invoicePaymentAttempt?: InvoicePaymentAttempt;
  checkoutSession?: InvoiceCheckoutSession;
  checkoutAuthToken?: string;
};

export type InvoicePdf = {
  content: Uint8Array;
  contentType: string;
  fileName: string;
};

export class InvoiceService extends BaseService {
  async create(params: InvoiceCreateParams): Promise<Invoice> {
    const request: Record<string, unknown> = {
      dueAt: this.toTimestamp(params.dueAt),
      scheduledSendAt: this.toTimestamp(params.scheduledSendAt),
      recipientEmail: params.recipientEmail,
      ccEmails: params.ccEmails,
      reference: params.reference,
      serviceDate: this.toTimestamp(params.serviceDate),
      memo: params.memo,
      footer: params.footer,
      metadata: params.metadata,
      idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
    };

    if ("orderId" in params && params.orderId) {
      request.orderId = params.orderId;
    } else if ("quickPay" in params && params.quickPay) {
      request.quickPay = params.quickPay;
    } else {
      throw new Error("Invoice create requires exactly one of orderId or quickPay");
    }

    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "CreateInvoiceDraft",
      request
    );

    return fromRawInvoice(res.invoice);
  }

  async get(invoiceId: string): Promise<Invoice> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "GetInvoice",
      { invoiceId }
    );

    return fromRawInvoice(res.invoice);
  }

  list(params: InvoiceListParams = {}): FlintList<Invoice> {
    return this.paginate((pageToken) => this.fetchPage(params, pageToken));
  }

  async update(invoiceId: string, params: UpdateInvoiceParams): Promise<Invoice> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "UpdateInvoiceDraft",
      {
        invoiceId,
        dueAt: this.toTimestamp(params.dueAt),
        scheduledSendAt: this.toTimestamp(params.scheduledSendAt),
        recipientEmail: params.recipientEmail,
        ccEmails: params.ccEmails,
        reference: params.reference,
        serviceDate: this.toTimestamp(params.serviceDate),
        memo: params.memo,
        footer: params.footer,
        metadata: params.metadata,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawInvoice(res.invoice);
  }

  async send(invoiceId: string, params: IdempotentInvoiceActionParams = {}): Promise<InvoiceSendResult> {
    const res = await this.rpc<
      Record<string, unknown>,
      { invoice: Raw; publicToken: string; publicUrl: string; deliveryAttempt?: Raw }
    >(SERVICE, "SendInvoice", {
      invoiceId,
      idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
    });

    return {
      invoice: fromRawInvoice(res.invoice),
      publicToken: res.publicToken,
      publicUrl: res.publicUrl,
      deliveryAttempt: res.deliveryAttempt ? fromRawInvoiceDeliveryAttempt(res.deliveryAttempt) : undefined,
    };
  }

  async void(invoiceId: string, params: IdempotentInvoiceActionParams = {}): Promise<Invoice> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "VoidInvoice",
      {
        invoiceId,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawInvoice(res.invoice);
  }

  async regeneratePublicLink(
    invoiceId: string,
    params: IdempotentInvoiceActionParams = {}
  ): Promise<InvoicePublicLinkResult> {
    const res = await this.rpc<
      Record<string, unknown>,
      { invoice: Raw; publicToken: string; publicUrl: string }
    >(SERVICE, "RegenerateInvoiceToken", {
      invoiceId,
      idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
    });

    return {
      invoice: fromRawInvoice(res.invoice),
      publicToken: res.publicToken,
      publicUrl: res.publicUrl,
    };
  }

  async sendReminder(
    invoiceId: string,
    params: IdempotentInvoiceActionParams = {}
  ): Promise<InvoiceReminderResult> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw; deliveryAttempt?: Raw }>(
      SERVICE,
      "SendInvoiceReminder",
      {
        invoiceId,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return {
      invoice: fromRawInvoice(res.invoice),
      deliveryAttempt: res.deliveryAttempt ? fromRawInvoiceDeliveryAttempt(res.deliveryAttempt) : undefined,
    };
  }

  listEvents(invoiceId: string, params: InvoiceEventListParams = {}): FlintList<InvoiceEvent> {
    return this.paginate((pageToken) => this.fetchEventsPage(invoiceId, params, pageToken));
  }

  listDeliveryAttempts(
    invoiceId: string,
    params: InvoiceDeliveryAttemptListParams = {}
  ): FlintList<InvoiceDeliveryAttempt> {
    return this.paginate((pageToken) => this.fetchDeliveryAttemptsPage(invoiceId, params, pageToken));
  }

  async recordManualPayment(
    invoiceId: string,
    params: ManualInvoicePaymentParams
  ): Promise<Invoice> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "RecordManualInvoicePayment",
      {
        invoiceId,
        amountMoney: params.amountMoney,
        receivedAt: this.toTimestamp(params.receivedAt),
        externalReference: params.externalReference,
        note: params.note,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawInvoice(res.invoice);
  }

  async reverseManualPayment(
    invoiceId: string,
    params: ManualInvoicePaymentParams
  ): Promise<Invoice> {
    const res = await this.rpc<Record<string, unknown>, { invoice: Raw }>(
      SERVICE,
      "ReverseManualInvoicePayment",
      {
        invoiceId,
        amountMoney: params.amountMoney,
        receivedAt: this.toTimestamp(params.receivedAt),
        externalReference: params.externalReference,
        note: params.note,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawInvoice(res.invoice);
  }

  async getCheckoutSession(invoiceId: string): Promise<InvoiceCheckoutSessionResult> {
    const res = await this.rpc<
      Record<string, unknown>,
      { invoice: Raw; invoicePaymentAttempt?: Raw; checkoutSession?: Raw; checkoutAuthToken?: string }
    >(SERVICE, "GetOrCreateInvoiceCheckoutSession", {
      invoiceId,
    });

    return {
      invoice: fromRawInvoice(res.invoice),
      invoicePaymentAttempt: res.invoicePaymentAttempt
        ? fromRawInvoicePaymentAttempt(res.invoicePaymentAttempt)
        : undefined,
      checkoutSession: res.checkoutSession ? fromRawInvoiceCheckoutSession(res.checkoutSession) : undefined,
      checkoutAuthToken: res.checkoutAuthToken,
    };
  }

  async getPdf(invoiceId: string): Promise<InvoicePdf> {
    const res = await this.rpc<
      Record<string, unknown>,
      { content: string; contentType: string; fileName: string }
    >(SERVICE, "GetInvoicePdf", { invoiceId });

    return {
      content: decodeBase64(res.content),
      contentType: res.contentType,
      fileName: res.fileName,
    };
  }

  private async fetchPage(params: InvoiceListParams, pageToken?: string) {
    const res = await this.rpc<Record<string, unknown>, { invoices?: Raw[]; nextPageToken?: string }>(
      SERVICE,
      "ListInvoices",
      {
        pageSize: params.limit,
        pageToken: pageToken ?? params.pageToken,
        status: params.status ? INVOICE_STATUS_TO_PROTO[params.status] : undefined,
        customerId: params.customerId,
        orderId: params.orderId,
        query: params.query,
      }
    );

    return this.toPage((res.invoices ?? []).map(fromRawInvoice), res.nextPageToken);
  }

  private async fetchEventsPage(
    invoiceId: string,
    params: InvoiceEventListParams,
    pageToken?: string
  ) {
    const res = await this.rpc<Record<string, unknown>, { events?: Raw[]; nextPageToken?: string }>(
      SERVICE,
      "ListInvoiceEvents",
      {
        invoiceId,
        pageSize: params.limit,
        pageToken: pageToken ?? params.pageToken,
      }
    );

    return this.toPage((res.events ?? []).map(fromRawInvoiceEvent), res.nextPageToken);
  }

  private async fetchDeliveryAttemptsPage(
    invoiceId: string,
    params: InvoiceDeliveryAttemptListParams,
    pageToken?: string
  ) {
    const res = await this.rpc<
      Record<string, unknown>,
      { deliveryAttempts?: Raw[]; nextPageToken?: string }
    >(SERVICE, "ListInvoiceDeliveryAttempts", {
      invoiceId,
      pageSize: params.limit,
      pageToken: pageToken ?? params.pageToken,
    });

    return this.toPage(
      (res.deliveryAttempts ?? []).map(fromRawInvoiceDeliveryAttempt),
      res.nextPageToken
    );
  }
}

const fromRawInvoiceLineItem = (raw: Raw): InvoiceLineItem => ({
  name: (raw["name"] as string) ?? "",
  quantity: Number(raw["quantity"] ?? 0),
  unitPriceMoney: fromRawMoney(raw["unitPriceMoney"] as Raw | undefined),
  grossMoney: fromRawMoney(raw["grossMoney"] as Raw | undefined),
  discountMoney: fromRawMoney(raw["discountMoney"] as Raw | undefined),
  taxMoney: fromRawMoney(raw["taxMoney"] as Raw | undefined),
  netMoney: fromRawMoney(raw["netMoney"] as Raw | undefined),
  description: raw["description"] as string | undefined,
  sku: raw["sku"] as string | undefined,
  imageUrl: raw["imageUrl"] as string | undefined,
});

const fromRawInvoiceDiscount = (raw: Raw): InvoiceDiscount => ({
  name: (raw["name"] as string) ?? "",
  amountMoney: fromRawMoney(raw["amountMoney"] as Raw | undefined),
  appliedMoney: fromRawMoney(raw["appliedMoney"] as Raw | undefined),
  scope: raw["scope"] != null ? String(raw["scope"]) : undefined,
  couponCode: raw["couponCode"] as string | undefined,
});

const fromRawInvoiceTip = (raw: Raw): InvoiceTip => ({
  amountMoney: raw["amountMoney"] ? fromRawMoney(raw["amountMoney"] as Raw) : undefined,
  percent: raw["percent"] != null ? Number(raw["percent"]) : undefined,
  name: raw["name"] as string | undefined,
  description: raw["description"] as string | undefined,
});

const fromRawNetAmounts = (raw: Raw): NetAmounts => ({
  subtotalMoney: fromRawMoney(raw["subtotalMoney"] as Raw | undefined),
  discountMoney: fromRawMoney(raw["discountMoney"] as Raw | undefined),
  taxMoney: fromRawMoney(raw["taxMoney"] as Raw | undefined),
  tipMoney: fromRawMoney(raw["tipMoney"] as Raw | undefined),
  paidMoney: fromRawMoney(raw["paidMoney"] as Raw | undefined),
  refundedMoney: fromRawMoney(raw["refundedMoney"] as Raw | undefined),
  balanceMoney: fromRawMoney(raw["balanceMoney"] as Raw | undefined),
});

const fromRawInvoiceSnapshot = (raw: Raw): InvoiceSnapshot => ({
  merchantDisplayName: raw["merchantDisplayName"] as string | undefined,
  customerDisplayName: raw["customerDisplayName"] as string | undefined,
  customerEmail: raw["customerEmail"] as string | undefined,
  billingAddress: fromRawAddress(raw["billingAddress"] as Raw | undefined),
  lineItems: ((raw["lineItems"] as Raw[]) ?? []).map(fromRawInvoiceLineItem),
  discounts: ((raw["discounts"] as Raw[]) ?? []).map(fromRawInvoiceDiscount),
  tips: ((raw["tips"] as Raw[]) ?? []).map(fromRawInvoiceTip),
  netAmounts: fromRawNetAmounts((raw["netAmounts"] as Raw) ?? {}),
  buyerNote: raw["buyerNote"] as string | undefined,
  merchantNote: raw["merchantNote"] as string | undefined,
  memo: raw["memo"] as string | undefined,
  footer: raw["footer"] as string | undefined,
  reference: raw["reference"] as string | undefined,
  serviceDate: fromTimestamp(raw["serviceDate"]),
});

const fromRawInvoice = (raw: Raw): Invoice => ({
  invoiceId: (raw["invoiceId"] as string) ?? "",
  merchantId: (raw["merchantId"] as string) ?? "",
  orderId: (raw["orderId"] as string) ?? "",
  customerId: raw["customerId"] as string | undefined,
  invoiceNumber: (raw["invoiceNumber"] as string) ?? "",
  status: resolveEnum(raw["status"], INVOICE_STATUS_MAP, INVOICE_STATUS_TO_PROTO) ?? "draft",
  refundStatus:
    resolveEnum(raw["refundStatus"], INVOICE_REFUND_STATUS_MAP, INVOICE_REFUND_STATUS_TO_PROTO) ??
    "none",
  dueAt: fromTimestamp(raw["dueAt"]),
  scheduledSendAt: fromTimestamp(raw["scheduledSendAt"]),
  sentAt: fromTimestamp(raw["sentAt"]),
  viewedAt: fromTimestamp(raw["viewedAt"]),
  paidAt: fromTimestamp(raw["paidAt"]),
  voidedAt: fromTimestamp(raw["voidedAt"]),
  recipientEmail: raw["recipientEmail"] as string | undefined,
  ccEmails: (raw["ccEmails"] as string[]) ?? [],
  reference: raw["reference"] as string | undefined,
  serviceDate: fromTimestamp(raw["serviceDate"]),
  memo: raw["memo"] as string | undefined,
  footer: raw["footer"] as string | undefined,
  snapshot: fromRawInvoiceSnapshot((raw["snapshot"] as Raw) ?? {}),
  collectibleBalance: fromRawMoney(raw["collectibleBalance"] as Raw | undefined),
  paidMoney: fromRawMoney(raw["paidMoney"] as Raw | undefined),
  refundedMoney: fromRawMoney(raw["refundedMoney"] as Raw | undefined),
  isOverdue: Boolean(raw["isOverdue"]),
  createdAt: new Date(raw["createdAt"] as string),
  updatedAt: new Date(raw["updatedAt"] as string),
  metadata: fromRawStringMap(raw["metadata"]),
});

const fromRawInvoiceEvent = (raw: Raw): InvoiceEvent => ({
  invoiceEventId: (raw["invoiceEventId"] as string) ?? "",
  type: (raw["type"] as string) ?? "",
  description: (raw["description"] as string) ?? "",
  actorType: raw["actorType"] as string | undefined,
  actorId: raw["actorId"] as string | undefined,
  metadata: fromRawStringMap(raw["metadata"]),
  occurredAt: new Date(raw["occurredAt"] as string),
});

const fromRawInvoiceDeliveryAttempt = (raw: Raw): InvoiceDeliveryAttempt => ({
  invoiceDeliveryAttemptId: (raw["invoiceDeliveryAttemptId"] as string) ?? "",
  kind:
    resolveEnum(raw["kind"], INVOICE_DELIVERY_KIND_MAP, INVOICE_DELIVERY_KIND_TO_PROTO) ?? "send",
  channel:
    resolveEnum(raw["channel"], INVOICE_DELIVERY_CHANNEL_MAP, INVOICE_DELIVERY_CHANNEL_TO_PROTO) ??
    "email",
  toEmail: (raw["toEmail"] as string) ?? "",
  ccEmails: (raw["ccEmails"] as string[]) ?? [],
  status:
    resolveEnum(raw["status"], INVOICE_DELIVERY_STATUS_MAP, INVOICE_DELIVERY_STATUS_TO_PROTO) ??
    "pending",
  errorMessage: raw["errorMessage"] as string | undefined,
  createdAt: new Date(raw["createdAt"] as string),
  sentAt: fromTimestamp(raw["sentAt"]),
});

const fromRawInvoicePaymentAttempt = (raw: Raw): InvoicePaymentAttempt => ({
  invoicePaymentAttemptId: (raw["invoicePaymentAttemptId"] as string) ?? "",
  invoiceId: (raw["invoiceId"] as string) ?? "",
  rail:
    resolveEnum(raw["rail"], INVOICE_PAYMENT_RAIL_MAP, INVOICE_PAYMENT_RAIL_TO_PROTO) ?? "card",
  status:
    resolveEnum(
      raw["status"],
      INVOICE_PAYMENT_ATTEMPT_STATUS_MAP,
      INVOICE_PAYMENT_ATTEMPT_STATUS_TO_PROTO
    ) ?? "open",
  targetAmount: fromRawMoney(raw["targetAmount"] as Raw | undefined),
  checkoutSessionId: raw["checkoutSessionId"] as string | undefined,
  paymentIntentId: raw["paymentIntentId"] as string | undefined,
  startedAt: new Date(raw["startedAt"] as string),
  expiresAt: fromTimestamp(raw["expiresAt"]),
  settledAt: fromTimestamp(raw["settledAt"]),
  failureCode: raw["failureCode"] as string | undefined,
  failureMessage: raw["failureMessage"] as string | undefined,
});

const fromRawInvoiceCheckoutSession = (raw: Raw): InvoiceCheckoutSession => ({
  checkoutSessionId: (raw["checkoutSessionId"] as string) ?? "",
  status: raw["status"] != null ? String(raw["status"]) : undefined,
  url: raw["url"] as string | undefined,
  expiresAt: fromTimestamp(raw["expiredAt"]) ?? fromTimestamp((raw["expiration"] as Raw | undefined)?.["expiresAt"]),
  createdAt: fromTimestamp(raw["createdAt"]),
  updatedAt: fromTimestamp(raw["updatedAt"]),
  orderId: raw["orderId"] as string | undefined,
  invoiceId: raw["invoiceId"] as string | undefined,
  merchantId: raw["merchantId"] as string | undefined,
});
