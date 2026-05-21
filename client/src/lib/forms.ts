export type WebsiteFormType = "contact" | "golf_lesson" | "newsletter_signup";

export type WebsiteFormPayload = {
  formType: WebsiteFormType;
  source: string;
  email: string;
  name?: string;
  phone?: string;
  subject?: string;
  message?: string;
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
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let result: { ok?: boolean; error?: string } = {};

  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok || !result.ok) {
    throw new FormSubmissionError(
      result.error || "We could not submit the form right now. Please try again.",
      response.status,
    );
  }

  return result;
}
