export function LoadingIndicator() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-5">
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-[var(--TXT-ON-DARK-SUBTLE)] border-t-[var(--BTN-PRIMARY-BG)]"
      />
    </section>
  );
}
