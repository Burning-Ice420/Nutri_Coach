"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function BuyPlanModal({
  open,
  setOpen,
  selectedPlan,
  type,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    goal: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/register-user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            frontEndClient: "Nutri_Coach",
            plantype: `${type} - ${selectedPlan.title} (${selectedPlan.price})`,
            type,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed to submit");
      setForm({ name: "", email: "", phoneNumber: "", goal: "" });
      setOpen(false);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg rounded-2xl shadow-xl p-6">
        <DialogHeader className="space-y-3">
          <h2
            id="dialog-title"
            className="text-xl font-semibold text-gray-900 tracking-tight"
          >
            Purchase Plan
          </h2>

          {selectedPlan && (
            <div className="flex flex-col gap-2">
              {/* Highlighted Type Badge */}
              <span className="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-primary text-white uppercase tracking-wide">
                {type}
              </span>

              {/* Plan Card */}
              <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border">
                <span className="font-medium">{selectedPlan.title}</span> —{" "}
                <span>{selectedPlan.price}</span>
              </div>
            </div>
          )}
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
          aria-labelledby="dialog-title"
        >
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="goal">Your Goal</Label>
            <Input
              id="goal"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
              placeholder="Weight loss, fitness..."
              className="h-11 rounded-xl"
            />
          </div>

          <div className="sm:col-span-2 mt-4">
            <DialogFooter>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 text-base rounded-xl"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
            {error && (
              <div className="text-destructive text-sm mt-3 text-center">
                {error}
              </div>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
