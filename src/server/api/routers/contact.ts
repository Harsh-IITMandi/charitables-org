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
    .mutation(async ({ input, ctx }) => {
      try {
        // Save to database
        const contactMessage = await ctx.db.contactMessage.create({
          data: {
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message,
          },
        });

        // TODO: Send email notification to admin
        // TODO: Send auto-reply to user
        
        console.log("Contact message saved:", contactMessage.id);
        
        return {
          success: true,
          message: "Message sent successfully",
          id: contactMessage.id,
        };
      } catch (error) {
        console.error("Error saving contact message:", error);
        throw new Error("Failed to send message. Please try again.");
      }
    }),

    // Get all contact messages (for admin use)
    getAll: publicProcedure
    .query(async ({ ctx }) => {
      const messages = await ctx.db.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
      });

      return messages;
    }),
});
