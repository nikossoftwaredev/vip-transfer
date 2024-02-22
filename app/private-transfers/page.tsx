import Form from "@/app/private-transfers/Form";

export default function PrivateTransfers() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h2 className="bold text-3xl text-center">Book a transfer.</h2>
      <Form />
    </main>
  );
}
