import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const donationRouter = createTRPCRouter({
  processDonation: publicProcedure
    .input(z.object({
      donorName: z.string().optional(),
      donorEmail: z.string().email().optional(),
      amount: z.number().positive(),
      paymentMethod: z.string(),
      message: z.string().optional(),
      isAnonymous: z.boolean().default(false),
    }))
    .mutation(async ({ input, ctx }) => {
      try{
        const donation = await ctx.db.donation.create({
          data: {
            donorName: input.donorName,
            donorEmail: input.donorEmail,
            amount: input.amount,
            paymentMethod: input.paymentMethod,
            message: input.message,
            isAnonymous: input.isAnonymous,
            status: "completed", // For bank tranfers, mark as completed
          },
        });

        // TODO: Send receipt email
        // TODO: Send notification to admin

        return {
          success: true,
          donationId: donation.id,
        };
      } catch(error) {
        console.error("Error processing donation:", error);
        throw new Error("Failed to process donation");
      }
    }),

    /// Get donation statistics (for public display)
    getStats: publicProcedure
    .query(async ({ ctx }) => {
      const totalDonations = await ctx.db.donation.aggregate({
        _sum: {amount: true},
        _count: true,
        where: { status: "completed" },
      });

      return {
        totalDonations,
        totalAmount: totalDonations._sum.amount || 0,
      };
    }),
});
