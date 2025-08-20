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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          frontEndClient: "Nutri_Coach",
          plantype: `${type} - ${selectedPlan.title} (${selectedPlan.price})`,
          type,
        }),
      });
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
      <DialogContent>
        <DialogHeader>
          {/* DialogTitle for accessibility compliance */}
          <h2 id="dialog-title" className="sr-only">
            Purchase Plan
          </h2>
          {selectedPlan && (
            <div className="mb-4 text-base text-muted-foreground">
              <span className="font-semibold">{selectedPlan.title}</span>{" "}
              &mdash; <span>{selectedPlan.price}</span>
            </div>
          )}
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-labelledby="dialog-title"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="goal">Goal</Label>
            <Input
              id="goal"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
          {error && (
            <div className="text-destructive text-sm mt-2">{error}</div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
