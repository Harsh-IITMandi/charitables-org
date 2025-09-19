import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Valid email is required"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    }))
    .mutation(async ({ input }) => {
      try {
        console.log("Contact form submission received:", {
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
          timestamp: new Date().toISOString(),
        });

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 500));

        // For production demo, skip database and just return success
        // In a real production app, use a hosted database or email service
        return {
          success: true,
          message: "Message sent successfully",
          id: `demo-${Date.now()}`,
        };
      } catch (error) {
        console.error("Error processing contact form:", error);
        throw new Error("Failed to send message. Please try again.");
      }
    }),

  getAll: publicProcedure
    .query(async () => {
      // Return empty array for demo
      return [];
    }),
});
