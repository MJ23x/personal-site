import React from "react";

export default function Contact() {
  return (
    <section className="flex-col items-center my-20 pt-10 border-t border-zinc-200 dark:border-zinc-800 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        Get in Touch
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl">
        Have a project in mind or anything to share with me? Send me a message
        and I'll get back to you. (I promise!)
      </p>

      {/* NETLIFY FORM SETUP:
        1. name="contact": The name of the form in your Netlify dashboard.
        2. method="POST": Required for submission.
        3. data-netlify="true": Tells Netlify to process this form.
      */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="max-w-xl space-y-6"
      >
        {/* Hidden Input: Required for Netlify to identify the form */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Please enter your name..."
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Please enter your email..."
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Let's build something...(Yes I will actually read this!)"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
