import React from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";

type FormData = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

const inputBase =
  "w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full bg-stone-50 min-h-screen">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about the project or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 -mt-16 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 flex flex-col md:flex-row"
        >
          {/* Sidebar */}
          <div className="bg-teal-700 text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-100 uppercase text-xs tracking-wider mb-1">
                      Project Coordinator
                    </p>
                    <p className="font-medium">Instituto Superior Técnico (IST)</p>
                    <p className="text-teal-100 mt-1">University of Lisbon (UL), Portugal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-100 uppercase text-xs tracking-wider mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@stars-erasmus.eu"
                      className="hover:text-teal-200 transition-colors"
                    >
                      info@stars-erasmus.eu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={isSubmitting}
                    {...register("name", { required: "Name is required" })}
                    className={inputBase}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={isSubmitting}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={inputBase}
                    placeholder="john@university.edu"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Organization / University
                </label>
                <input
                  id="organization"
                  type="text"
                  aria-invalid={!!errors.organization}
                  aria-describedby={errors.organization ? "org-error" : undefined}
                  disabled={isSubmitting}
                  {...register("organization", { required: "Organization is required" })}
                  className={inputBase}
                  placeholder="University Name"
                />
                {errors.organization && (
                  <p id="org-error" className="text-red-500 text-xs mt-1">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={isSubmitting}
                  {...register("message", { required: "Message is required" })}
                  className={`${inputBase} resize-none`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
