export type WebsiteFormType = "contact" | "golf_lesson" | "newsletter_signup";

export type WebsiteFormPayload = {
  formType: WebsiteFormType;
  source: string;
  email: string;
  name?: string;
  phone?: string;
  subject?: string;
  message?: string;
  formName?: string;
  companyWebsite?: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
};

export class FormSubmissionError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "FormSubmissionError";
    this.status = status;
  }
}

export async function submitWebsiteForm(payload: WebsiteFormPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let result: { ok?: boolean; success?: boolean; error?: string } = {};

  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok || (!result.ok && !result.success)) {
    throw new FormSubmissionError(
      result.error || "We could not submit the form right now. Please try again.",
      response.status,
    );
  }

  trackFormSubmit(payload);

  return result;
}

function trackFormSubmit(payload: WebsiteFormPayload) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", "form_submit", {
    form_name: payload.formName || labelForFormType(payload.formType),
    form_type: payload.formType,
    source: payload.source,
  });
}

function labelForFormType(formType: WebsiteFormType) {
  if (formType === "contact") return "Contact Form";
  if (formType === "golf_lesson") return "Golf Lesson Request";
  return "Newsletter Signup";
}
