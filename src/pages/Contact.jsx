function Contact() {
  return (
    <section className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <form
        action="https://formsubmit.co/youremail@example.com"
        method="POST"
        className="space-y-4"
      >
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-900 dark:text-white"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-900 dark:text-white"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-900 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-black font-semibold py-3 rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
}
export default Contact;
