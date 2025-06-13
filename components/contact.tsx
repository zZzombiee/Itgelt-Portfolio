"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { z } from "zod";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   subject: z
//     .string()
//     .min(5, { message: "Subject must be at least 5 characters." }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters." }),
// });

// async function submitContactForm(formData: FormData) {
//   // "use server";
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return { success: true };
// }

const Contact = () => {
  // const { toast } = useToast();
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const formData = new FormData(e.currentTarget);
  //   const formValues = {
  //     name: formData.get("name") as string,
  //     email: formData.get("email") as string,
  //     subject: formData.get("subject") as string,
  //     message: formData.get("message") as string,
  //   };

  //   try {
  //     formSchema.parse(formValues);
  //     setFormErrors({});

  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     toast({
  //       title: "Message sent!",
  //       description: "Thanks for reaching out. I'll get back to you soon.",
  //     });

  //     e.currentTarget.reset();
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       const errors: Record<string, string> = {};
  //       error.errors.forEach((err) => {
  //         if (err.path[0]) {
  //           errors[err.path[0] as string] = err.message;
  //         }
  //       });
  //       setFormErrors(errors);
  //     }

  //     toast({
  //       title: "Error",
  //       description: "Please check the form for errors.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out through the form below or via my social media.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start">
          {/* <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={
                      formErrors.name
                        ? "border-red-500"
                        : "bg-slate-100 dark:bg-gray-900"
                    }
                    aria-describedby={
                      formErrors.name ? "name-error" : undefined
                    }
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.mail@example.mn"
                    className={
                      formErrors.email
                        ? "border-red-500"
                        : "bg-slate-100 dark:bg-gray-900"
                    }
                    aria-describedby={
                      formErrors.email ? "email-error" : undefined
                    }
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-sm text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    className={
                      formErrors.subject
                        ? "border-red-500"
                        : "bg-slate-100 dark:bg-gray-900"
                    }
                    aria-describedby={
                      formErrors.subject ? "subject-error" : undefined
                    }
                  />
                  {formErrors.subject && (
                    <p id="subject-error" className="text-sm text-red-500">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    className={
                      formErrors.message
                        ? "border-red-500"
                        : "bg-slate-100 dark:bg-gray-900"
                    }
                    aria-describedby={
                      formErrors.message ? "message-error" : undefined
                    }
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-sm text-red-500">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500" />
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                    <a
                      href="mailto:24LP9088@nest.edu.com"
                      className="hover:underline"
                    >
                      24LP9088@nest.edu.com
                    </a>
                  </div>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work, full-time
                    positions, and interesting collaborations.
                  </p>
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-3">
                      Connect with me
                    </h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-slate-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <a
                          href="https://github.com/zZzombiee"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-slate-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <a
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-slate-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <a
                          href="https://www.instagram.com/itgelt.ge"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className=""
                        >
                          <Instagram className="w-5 h-5 " />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-slate-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 w-fit px-3"
                      >
                        <p
                          rel="noopener noreferrer"
                          aria-label="Phone"
                          className="cursor-pointer"
                        >
                          <Phone className="w-5 h-5 " />
                          <span className="font-light">+956 8964-6550</span>
                        </p>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
