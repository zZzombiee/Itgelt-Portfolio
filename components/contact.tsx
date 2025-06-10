const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-md font-semibold mb-6 dark:text-gray-400">
        Get in touch
      </h2>
      <h1 className="text-5xl font-bold mb-4 dark:text-gray-300">
        I would love to hear from you!
      </h1>
      <p className="text-lg dark:text-gray-700 mb-8">
        Whether you have a question, want to collaborate, or just want to say
        hello, feel free to reach out.
      </p>
      <div className="flex items-start gap-8">
        <a
          href="mailto:your-email@example.com"
          className="text-blue-500 hover:underline"
        >
          your-email@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
