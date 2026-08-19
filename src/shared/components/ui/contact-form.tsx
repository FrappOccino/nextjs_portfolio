"use client";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const sendEmail = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

      console.log("SUCCESS!", response.status, response.text);

      form.reset();
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="m-5 rounded-lg border p-5 relative z-10"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Name */}
        <fieldset className="fieldset">
          <label
            className="mb-1 text-sm font-medium"
            htmlFor="name"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full"
            placeholder="Your name"
            required
          />
        </fieldset>

        {/* Email */}
        <fieldset className="fieldset">
          <label
            className="mb-1 text-sm font-medium"
            htmlFor="email"
          >
            Email
          </label>

          <label className="input input-bordered flex w-full items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
        </fieldset>
      </div>

      {/* Phone */}
      <fieldset className="fieldset">
        <label
          className="mb-1 text-sm font-medium"
          htmlFor="phone"
        >
          Phone
        </label>

        <label className="input input-bordered flex w-full items-center gap-2">
          <svg
            className="h-4 w-4 shrink-0 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
          </svg>

          <input
            type="tel"
            id="phone"
            name="phone"
            className="tabular-nums"
            placeholder="09171234567"
            pattern="[0-9]{11}"
            minLength={11}
            maxLength={11}
            title="Must be 11 digits"
            required
          />
        </label>

        <p className="mt-1 text-xs text-base-content/50">
          Enter an 11-digit phone number.
        </p>
      </fieldset>

      {/* Message */}
      <fieldset className="fieldset">
        <label
          className="mb-1 text-sm font-medium"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          className="textarea textarea-bordered min-h-36 w-full resize-y"
          placeholder="Tell me about your project..."
          required
        />
      </fieldset>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          className="btn btn-primary px-8"
          type="submit"
        >
          Let's get in touch!
        </button>
      </div>
    </form>
  );
}